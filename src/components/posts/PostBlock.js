import MarkdownBlock from "src/components/posts/MarkdownBlock";
import PlotBlock from 'src/components/posts/PlotBlock';

const PostBlock = ({ block }) => {

  return (
    <>
      {block.type === 'cell' && block.data.cell_type === 'markdown' ? 
        <MarkdownBlock data={block.data} />
      : null}
      {block.type === 'plotly' ? 
        block.data.outputs.map((output, i) => (
          <PlotBlock key={`plotly_${i}`} data={output.data}/>
        ))
      : null}
    </>
  )
}

export default PostBlock;