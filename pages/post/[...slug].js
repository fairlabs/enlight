import { useState, useEffect } from 'react';
import Head from 'next/head';
import { IpynbRenderer } from "react-ipynb-renderer";
import dynamic from 'next/dynamic';
import Frame from 'src/components/layouts/Frame';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import { makeFileStructure, makePaths } from 'src/utility/utility';
import fs from 'fs';

export default function Post({fileStructure, file, title}) {

  const router = useRouter();
  let ipynbCells = file.cells;
  const [cells, setCells] = useState([]);
  const PlotGraph = dynamic(import('src/components/PlotGraph'),{ssr: false});
  const fileName = router.query.slug[router.query.slug.length]

  const categorizeTypes = async () => {
    let arr = [];
    await ipynbCells.forEach((el, i) => {
      if (el.outputs?.length > 0) {
        el.outputs.forEach((e, i) => {
          if (e.data && e.data === "application/vnd.plotly.v1+json") {
            console.log('?')
            arr.push({type: 'plotly', data: el});
          }
        })
      }
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
        <title>{title}</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/fairlabs_icon.svg" />
      </Head>

      <main>
        <Frame fileStructure={fileStructure}>
          <Stack mt={6}>
            {cells.map((el, i) => {
              if(el.type === 'cell' && el.data.cell_type === 'markdown') {
                return (
                  <Stack key={i} sx={{maxWidth: '900px'}}>
                    <IpynbRenderer
                      ipynb={{cells: [el.data]}}
                      syntaxTheme="ghcolors"
                      language="python"
                      bgTransparent={true}
                      formulaOptions={{
                        mathjax3: {
                          tex: {
                            tags: "ams"
                          }
                        }
                      }}
                      mdiOptions={{
                        html: true
                      }}
                    />
                  </Stack>
                )
              } else if (el.type === 'plotly') {
                return (el.data.outputs.map((output, i) => {
                  return (
                    <Stack key={i} sx={{mb: '20px'}}>
                      <PlotGraph
                        data={output.data["application/vnd.plotly.v1+json"]?.data}
                        layout={{ width: 800, height: 550, ...output.data["application/vnd.plotly.v1+json"]?.layout}}
                      />
                    </Stack>
                  )
                }))
              }
            })}
          </Stack>
        </Frame>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {

  const fileStructure = makeFileStructure('src/contents');
  const jsonFile = params.slug.join('/');
  const file = fs.readFileSync(`src/contents/${jsonFile}`);
  const title = params.slug[params.slug.length -1].split('.json')[0];

  return {
    props: {
      fileStructure: fileStructure,
      file: JSON.parse(file),
      title: title,
    },
  };
};

export const getStaticPaths = async () => {

  let arr = [];
  makePaths('src/contents',[], arr);
 
	return {
		paths: arr,
		fallback: false,
	};
}