function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const output = [];

  const traverseLevel = (child: TreeNode, distance: number) => {

    if (!output[distance]) {
      output.push([ child.val ]);
    } else {
      output[distance].push(child.val);
    }

    if (child.left) traverseLevel(child.left, distance + 1);
    if (child.right) traverseLevel(child.right, distance + 1);
  }

  traverseLevel(root, 0);
  return output;
}
