import { Stack } from '@mui/material';
import dynamic from 'next/dynamic';

const PlotBlock = ({ data }) => {

  const PlotGraph = dynamic(import('src/components/posts/PlotGraph'),{ssr: false});

  return (
    <Stack sx={{mb: '20px'}}>
      <PlotGraph
        data={data["application/vnd.plotly.v1+json"]?.data}
        layout={{ 
          width: 800, 
          height: 550, 
          ...data["application/vnd.plotly.v1+json"]?.layout
        }}
      />
    </Stack>
  )
}

export default PlotBlock;