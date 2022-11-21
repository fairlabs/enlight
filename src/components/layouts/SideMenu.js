import { useSideMenu } from 'src/hooks/hooks';
import { List, Stack, Typography } from '@mui/material';
import Menu from 'src/components/Menu';

export const SideMenu = ({ fileStructure }) => {

  const [files, handleOpen] = useSideMenu(fileStructure);

  return (
    <Stack sx={{
      padding: '20px',
      minWidth: '280px', 
      }}
    >
      <Stack
        position={'sticky'}
        top={'80px'}
      >
        <Typography 
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            my: '20px'
          }}
        >
          Contents
        </Typography>
        <List
          sx={{ 
            maxWidth: 360, 
          }}
        >
          {files.map((node, i) => (
            <div key={`fileStructure_${i}`}>
              <Menu 
                fileStructure={fileStructure} 
                node={node} 
                handleOpen={handleOpen}
              />
            </div>
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

export default SideMenu;