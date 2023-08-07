function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const ans: number[] = [];
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    ans.push(node.val);
    node = node.right
  }
  return ans;
}
