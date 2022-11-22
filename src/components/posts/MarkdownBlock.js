import { Stack } from '@mui/material';
import { IpynbRenderer } from "react-ipynb-renderer";

export const MarkdownBlock = ({data}) => {
  return (
    <Stack sx={{maxWidth: '900px'}}>
      <IpynbRenderer
        ipynb={{cells: [data]}}
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
}

export default MarkdownBlock;