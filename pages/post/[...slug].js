import { useState, useEffect } from 'react';
import Head from 'next/head';
import { IpynbRenderer } from "react-ipynb-renderer";
import dynamic from 'next/dynamic';
import Footer from 'src/components/layouts/Footer';
import Frame from 'src/components/layouts/Frame';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

export default function Post({fileStructure, file}) {

  const router = useRouter();

  const ipynb = file;
  let ipynbCells = file.cells;
  const [cells, setCells] = useState([]);
  const PlotGraph = dynamic(import('src/components/PlotGraph'),{ssr: false});

  const categorizeTypes = async () => {
    let arr = [];
    await ipynbCells.forEach((el, i) => {
      if (el.outputs && el.outputs[0] && el.outputs[0].data && el.outputs[0].data["application/vnd.plotly.v1+json"]) {
        arr.push({type: 'cell', data: eliminateOutputs(el)});
        arr.push({type: 'plotly', data: el});
      } else {
        arr.push({type: 'cell', data: el});
      }
    })
    setCells(arr);
  };

  const eliminateOutputs = (obj) => {
    const deepCopiedObj = JSON.parse(JSON.stringify(obj));
    deepCopiedObj.outputs = [];
    return deepCopiedObj;
  }

  useEffect(() => {
    categorizeTypes();
  },[router])

  return (
    <div>
      <Head>
        <title>Fairlabs Enlight</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Frame fileStructure={fileStructure}>
          {cells.map((el, i) => {
            if(el.type === 'cell') {
              return (
                <IpynbRenderer
                  key={i}
                  ipynb={{cells: [el.data]}}
                  syntaxTheme="ghcolors"
                  language="python"
                  bgTransparent={true}
                />
              )
            } else if (el.type === 'plotly') {
              return (el.data.outputs.map((output, i) => {
                return (
                  <div key={i}>
                    <PlotGraph
                      data={output.data["application/vnd.plotly.v1+json"]?.data}
                      layout={output.data["application/vnd.plotly.v1+json"]?.layout}
                    />
                  </div>
                )
              }))
            }
          })}
        </Frame>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const root = 'src/contents';
  const makeFileStructure = (treePath) => {    

    const node = fs.readdirSync(treePath);
    if (node.length === 0) return [];
    let nodeTree = [];

    node.forEach((childNode, i) => {
      const address = path.join(treePath, childNode);
      const isDirectory = fs.lstatSync(address).isDirectory();
      if (isDirectory) {
        nodeTree.push({
          name: childNode,
          type: 'folder',
          link: address,
          dir: [],
          open: true,
        })
        nodeTree[nodeTree.length-1].dir = makeFileStructure(address);
      } else {
        nodeTree.push({
          name: childNode,
          type: 'file',
          link: address,
        })
      }
    })

    return nodeTree;
  };

  const fileStructure = makeFileStructure(root, []);


  const jsonFile = params.slug.join('/');

  const file = fs.readFileSync(`src/contents/${jsonFile}`);

  return {
    props: {
      fileStructure: fileStructure,
      file: JSON.parse(file),
    },
  };
};

export const getStaticPaths = async () => {

  const root = 'src/contents';
  let arr = [];
  
  const makeFileStructure = (treePath, parentSlug) => {    

    const node = fs.readdirSync(treePath);

    if (node.length === 0) return;
    
    node.forEach((childNode, i) => {
      const address = path.join(treePath, childNode);
      const isDirectory = fs.lstatSync(address).isDirectory();
      if (isDirectory) {
        let slug = [...parentSlug];
        slug.push(childNode)
        makeFileStructure(address, slug);
      } else {
        arr.push({params: {'slug': [...parentSlug, childNode]}});
      }
    })
  };

  makeFileStructure(root, []);
 
	return {
		paths: arr,
		fallback: false,
	};
}