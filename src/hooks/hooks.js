import { useState, useEffect } from 'react';

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

  return [files, handleOpen];
}

export const usePosts = (fileStructure) => {

  const [posts, setPosts] = useState([]);

  const extractPosts = () => {
    let memo = [];
    const recursive = (arr) => {
      if (arr.length === 0) return;
      arr.forEach((el, i) => {
        if (el.type === 'file') memo.push(el);
        if (el.type === 'folder') recursive(el.dir);
      })
    }
    recursive(fileStructure);
    setPosts(memo);
  }

  useEffect(() => {
    extractPosts();
  }, [])
  
  return [posts];
}