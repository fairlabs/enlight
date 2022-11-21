import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { List, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const Menu = ({fileStructure, node, handleOpen}) => {
  const router = useRouter();

  if (node.length === 0) return;
    
  if (node.type === 'file') {
    const fileName = node.name.split('.')[0];
    const link = node.link.split('/').slice(2).join('/');
    const encodedLink = encodeURI(link);

    return (
      <Link href={`/post/${link}`}>
        <ListItemButton
          sx={{
            mb: '10px'
          }}
        >
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText 
            secondary={fileName} 
            sx={{
              '.MuiTypography-root': {
                fontWeight: router.asPath === `/post/${encodedLink}` ? 'bold' : '',
                fontSize: '12px',
                color: router.asPath === `/post/${encodedLink}` ? 'black' : '',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}}
          />
        </ListItemButton>
      </Link>
    )
  } 
  else if (node.type === 'folder') {
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
}

export default Menu;