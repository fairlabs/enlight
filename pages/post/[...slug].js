import Head from 'next/head';
import { IpynbRenderer } from "react-ipynb-renderer";
import dynamic from 'next/dynamic';
import Frame from 'src/components/layouts/Frame';
import { Stack } from '@mui/material';
import { makeFileStructure, makePaths } from 'src/utility/utility';
import fs from 'fs';
import { useCells } from 'src/hooks/hooks';

export default function Post({fileStructure, file, title}) {

  const [cells] = useCells(file);
  const PlotGraph = dynamic(import('src/components/PlotGraph'),{ssr: false});

  return (
    <>
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
    </>
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