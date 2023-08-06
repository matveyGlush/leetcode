class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  let ans: Array<number> = [];
  let last: TreeNode | null = null;
  let curr = root;


  while (curr !== null) {
    if (curr.left == null) {
      ans.push(curr.val);
      curr = curr.right;
    } else {
      last = curr.left;
      while (last.right != null && last.right != curr) {
        last = last.right;
      }

      if (last.right == null) {
        ans.push(curr.val);
        last.right = curr;
        curr = curr.left;
      } else {
        last.right = null;
        curr = curr.right;
      }
    }
  }
  return ans;
}
