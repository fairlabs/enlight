import { useState } from 'react';

export const useSideMenu = (fileStructure) => {

  const [files, setFiles] = useState(fileStructure);

  const handleOpen = (node) => {
    const result = handleOpenState(files, node);
    setFiles(result);
  }

  const handleOpenState = (tree, node) => {
    const deepCopy = JSON.parse(JSON.stringify(tree));
    deepCopy.forEach((el, i) => {
      if (el.link === node.link) {
        el.open = !el.open;
      } else if (el.dir && el.dir.length > 0) {
        deepCopy[i].dir = handleOpenState(el.dir, node);
      }
    })
    return deepCopy;
  }

  return [files, handleOpen]
}