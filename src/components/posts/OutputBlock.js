import { Stack } from '@mui/material';
import { IpynbRenderer } from "react-ipynb-renderer";

export const OutputBlock = ({data}) => {

  const dataWnoSrouceArr = data;
  dataWnoSrouceArr.source = [];

  return (
    <Stack sx={{maxWidth: '900px'}}>
      <IpynbRenderer
        ipynb={{cells: [dataWnoSrouceArr]}}
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

export default OutputBlock;