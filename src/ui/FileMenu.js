import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FileMenu = ({node}) => {

  const router = useRouter();
  const fileName = node.name.split('.')[0];
  const link = node.link.split('/').slice(2).join('/');
  const encodedLink = encodeURI(link);

  return (
    <Link href={`/post/${link}`}>
      <ListItemButton
        sx={{
          mb: '10px',
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
};

export default FileMenu;