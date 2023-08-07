function helper(root: TreeNode | null, ans: number[]) {
  if (root != null) {
    helper(root.left, ans);
    helper(root.right, ans);
    ans.push(root.val);
  }
}

function recursivePostorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const ans: number[] = [];
  helper(root, ans);
  return ans;
}

function iterativePostorderTraversal(root: TreeNode | null): number[] {
  if(!root) return [];
  let ans: number[] = [];
  let stack: TreeNode[] = [root];

  while(stack.length) {
    let cur = stack.pop();
    if(!cur.left && !cur.right) {
      ans.push(cur.val);
    } else {
      stack.push(cur);
      if(cur.right) stack.push(cur.right);
      if(cur.left) stack.push(cur.left);
      cur.left = null;
      cur.right = null;
    }
  }
  return ans;
}
