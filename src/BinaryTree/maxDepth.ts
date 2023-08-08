function topDownMaxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 1;
  function getDepth(node: TreeNode | null, depth: number) {
    if (!node) return;

    if (!node.left && !node.right) ans = Math.max(ans, depth);

    getDepth(node.left, depth + 1);
    getDepth(node.right, depth + 1);
  }
  getDepth(root,1);
  return ans;
}

function DownTopMaxDepth(root: TreeNode | null): number {
  if(!root) return 0;

  let leftSideNodes = 1 + DownTopMaxDepth(root.left);
  let rightSideNodes = 1 + DownTopMaxDepth(root.right);
  return Math.max(leftSideNodes,rightSideNodes)
}
