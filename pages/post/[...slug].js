import Head from 'next/head';
import Frame from 'src/components/layouts/Frame';
import { Stack } from '@mui/material';
import { makeFileStructure, makePaths } from 'src/utility/utility';
import fs from 'fs';
import { useCells } from 'src/hooks/hooks';
import PostBlock from 'src/components/posts/PostBlock';

export default function Post({fileStructure, file, title}) {

  const [cells] = useCells(file);

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
            {cells.map((block, i) => (
              <PostBlock 
                key={`block_${i}`} 
                block={block}
              />
            ))}
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