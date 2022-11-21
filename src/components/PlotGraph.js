import Plot from 'react-plotly.js';

export const PlotGraph = ({data, layout}) => {
  return (
    <Plot
      data={data}
      layout={layout}
    />
  )
};

export default PlotGraph;