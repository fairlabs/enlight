import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { List, Stack } from '@mui/material';
import Menu from 'src/components/Menu';

const FolderMenu = ({node, fileStructure, handleOpen}) => {
  return (
    <Stack>
      <ListItemButton
        onClick={() => handleOpen(node)}
        sx={{
          border: '1px solid #0077b6',
          borderRadius: '14px',
          mb: '10px'
        }}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={node.name} 
          sx={{
            '.MuiTypography-root': {
              fontSize: '12px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
          }}}
        />
        {node.open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Stack sx={{ml: '20px'}}>
        <Collapse in={node.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.dir.map((childnode, i) => (
              <div key={`${node.name}_${i}`}>
                <Menu 
                  fileStructure={fileStructure} 
                  node={childnode} 
                  handleOpen={handleOpen}
                />
              </div>
            ))}
          </List>
        </Collapse>
      </Stack>
    </Stack>
  )
}

export default FolderMenu;