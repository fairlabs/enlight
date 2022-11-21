import FolderMenu from 'src/ui/FolderMenu';
import FileMenu from 'src/ui/FileMenu';

const Menu = ({fileStructure, node, handleOpen}) => {
  //escape syntax
  if (node.length === 0) return;

  if (node.type === 'file') {
    return <FileMenu node={node} />
  } else if (node.type === 'folder') {
    return <FolderMenu node={node} fileStructure={fileStructure} handleOpen={handleOpen} />
  }
}

export default Menu;