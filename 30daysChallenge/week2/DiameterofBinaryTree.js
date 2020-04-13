// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

// 先定義 二次元樹最常直徑之意思 : node 與 node 之間最長的距離
// 解決方案: 
// ● 每次計算每個節點的最長長度，並更新紀錄目前長的長度，每一點的 最長長度 = 左邊node 最深長度 + 右邊 node 最長長度

// 正確答案之一 
function diameterOfBinaryTree(root) {
    if(!root) return 0
    let longest = {length: 0}
    res(root,longest)
    return longest.length  
}


function res(treenode,longest) {
    if(!treenode) return 0

    // L 與 R return 回來的是
    // L R 為 自己node 之 左邊最長深度有幾個node 與 右邊最長深度有幾個node
    // 假設 L return 為 2 ， 代表自己左邊底下最長深度的node 是兩個 ， 加上自己本身是3個node => 左邊最深長度 = 2 (等於回傳來的值) 
    // 所以每次計算 L + R (等於該node的最長直徑) ， 有沒有大於紀錄目前最長直徑 ， 有就修改
    // 一值計算到root ， 遞迴呼叫
    let L = res(treenode.left,longest)
    let R = res(treenode.right,longest)
    let maxLength = L > R ? L : R
    longest.length = L + R > longest.length ? L + R : longest.length
    return 1 + maxLength
}

// wrong answer : 只計算到最頂端的深度，不是最長路徑(所有點裡面，點跟點之間的距離最長者)
// function diameterOfBinaryTree(root) {
//     if(!root) return 0
//     let leftLength = root.left ? res(root.left) - 1: 0
//     let rightLength = root.right ? res(root.right) - 1 : 0
//     let longest = leftLength + rightLength
//     root.left ? longest++ : '' 
//     root.right ? longest++ : ''
//     return longest    
// }


// function res(treenode , length) {
//     if(!treenode) return 0
//     let L = res(treenode.left)
//     let R = res(treenode.right)
//     let max = L > R ? L : R
//     return 1 + max
// }

// function res(n) {
//     if(n === 0) return 1
    
//     return n * res(n - 1)
// }

// console.log(res(5))