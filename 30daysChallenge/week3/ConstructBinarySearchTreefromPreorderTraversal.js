// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)


// 搞清楚題目的規則 , 其實就蠻簡單的
// 
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function bstFromPreorder(preorder) {
    if(preorder.length === 0 ) return null
    let root = new TreeNode(preorder[0]) , isfind = false , i = 0 , leftTree = []
    preorder.splice(0,1)
    while(!isfind && i < preorder.length) {
        preorder[i] > root.val ? isfind = true : i++
    }
    leftTree = preorder.splice(0,i)
    root.left = bstFromPreorder(leftTree)
    root.right = bstFromPreorder(preorder)
    return root
}
