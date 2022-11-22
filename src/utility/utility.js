import fs from 'fs';
import path from 'path';

export const makeFileStructure = (treePath) => {
  const node = fs.readdirSync(treePath);
  if (node.length === 0) return [];
  let nodeTree = [];

  node.forEach((childNode, i) => {
    const address = path.join(treePath, childNode);
    const isDirectory = fs.lstatSync(address).isDirectory();
    if (isDirectory) {
      nodeTree.push({
        name: childNode,
        type: 'folder',
        link: address,
        dir: [],
        open: true,
      })
      nodeTree[nodeTree.length-1].dir = makeFileStructure(address);
    } else {
      nodeTree.push({
        name: childNode,
        type: 'file',
        link: address,
      })
    }
  })

  return nodeTree;
}

export const makePaths = (treePath, parentSlug, arr) => {
  const node = fs.readdirSync(treePath);
  if (node.length === 0) return;
  
  node.forEach((childNode, i) => {
    const address = path.join(treePath, childNode);
    const isDirectory = fs.lstatSync(address).isDirectory();
    if (isDirectory) {
      let slug = [...parentSlug];
      slug.push(childNode)
      makePaths(address, slug, arr);
    } else {
      arr.push({params: {'slug': [...parentSlug, childNode]}});
    }
  })
}