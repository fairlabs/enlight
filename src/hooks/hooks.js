import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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

export const useCells = (file) => {
  const router = useRouter();
  const [cells, setCells] = useState([]);
  let ipynbCells = file.cells;

  const categorizeTypes = async () => {
    let arr = [];
    await ipynbCells.forEach((el, i) => {
      if (el.outputs?.length > 0) {
        el.outputs.forEach((e, i) => {
          if (e.data && e.data === "application/vnd.plotly.v1+json") {
            console.log('?')
            arr.push({type: 'plotly', data: el});
          }
        })
      }
      if (el.outputs && el.outputs[0] && el.outputs[0].data && el.outputs[0].data["application/vnd.plotly.v1+json"]) {
        arr.push({type: 'cell', data: eliminateOutputs(el)});
        arr.push({type: 'plotly', data: el});
      } else {
        arr.push({type: 'cell', data: el});
      }
    })
    setCells(arr);
  };

  const eliminateOutputs = (obj) => {
    const deepCopiedObj = JSON.parse(JSON.stringify(obj));
    deepCopiedObj.outputs = [];
    return deepCopiedObj;
  }

  useEffect(() => {
    categorizeTypes();
  },[router])

  return [cells];
}