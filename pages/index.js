import Head from 'next/head';
import Frame from 'src/components/layouts/Frame';
import Banner from 'src/components/Banner';
import { Stack, Grid, Typography, Pagination } from '@mui/material';
import { useState } from 'react';
import { makeFileStructure } from 'src/utility/utility';
import { usePosts } from 'src/hooks/hooks';
import ContentCard from 'src/components/ContentCard';

export default function Home({ fileStructure }) {

  const [posts] = usePosts(fileStructure);
  const [page, setPage] = useState(0);
  const contentsNperPage = 20;

  return (
    <>
      <Head>
        <title>Fairlabs Enlight</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/fairlabs_icon.svg" />
      </Head>
      <main>
        <Frame 
          banner={<Banner />}
          fileStructure={fileStructure}
        >
          <Stack spacing={2}>
            <Typography sx={{fontSize: '32px', fontWeight: '600'}}>
              All
            </Typography>
            <Grid container spacing={2}>
            {posts
              .slice(contentsNperPage*page, contentsNperPage*(page+1))
              .map((post, i) => <ContentCard key={`ContentCard_${i}`} post={post} />)
            }
            </Grid>
            <Stack direction='row' sx={{py: 10, justifyContent: 'center'}}>
              <Pagination 
                count={Math.ceil(posts.length/contentsNperPage)} 
                color="primary" 
                onChange={(e, value) => setPage(value -1)}
              />
            </Stack>
          </Stack>
        </Frame>
      </main>
    </>
  )
}

export const getStaticProps = async () => {

  const fileStructure = makeFileStructure('src/contents');

  return {
    props: {
      fileStructure: fileStructure
    },
  };
};