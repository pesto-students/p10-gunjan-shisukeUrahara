
class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertIntoTree(i, arr) {
  if (i >= arr.length || arr[i] === null) {
    return null;
  }

  const curr = new TreeNode(arr[i]);
  curr.left = insertIntoTree(2 * i + 1, arr);
  curr.right = insertIntoTree(2 * i + 2, arr);

  return curr;
}

function createTree(arr)
{
  return insertIntoTree(0, arr);
}

module.exports={
    createTree
}