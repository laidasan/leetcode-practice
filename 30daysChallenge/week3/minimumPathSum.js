// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// 題目要求是:找尋一個路徑 , 路徑上所有的合最小
// 尋找條件就是從最左上角開始 , 最左下角結束 , 每次移動只能往右或是往下移動
// 通常我們第一個想到是: 只要在每次選擇最小數字移動就好
// 但這是錯的 , 有些情況是錯誤的解
// 正確的解答是: 每次選擇合最短的路徑
// 所以我們只要計算出每個位置的最短路徑即可
// 而 邊界 第一 row 或是 第一 col , 路徑可以直接算出來 , 因為就只有一條
// 算出來後去計算每個點最短路徑(合最小)  => grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j] , grid[i][j - 1]) 
// grid[i][j]這個點的最短路徑就是 , 左邊 或是 上方 取合最小
function minPathSum(grid) {
    let sum = 0 , row = grid.length - 1 , col = grid[0].length - 1 , path = [grid[row][col]]

    // 第一 col 的路徑合
    for(let i = 1 ; i <= col ; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    // 第一 row 的路徑合
    for(let i = 1 ; i <= row ; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    
    // 計算每個點合最小的路徑
    for(let i = 1 ; i <= row ; i++) {
        for(let j = 1 ; j <= col; j++) {
            grid[i][j] += Math.min(grid[i - 1][j] , grid[i][j - 1])
        }
    }

    // 最後算出來最右下角的終點 , 就是最短路徑的合值
    return grid[row][col]
}


// wrong answer
// function minPathSum(grid) {
//     let sum = 0 , row = grid[0].length - 1 , col = grid.length - 1 , path = [grid[row][col]]
//     for(let i = 1 ; i <= col ; i++) {
//         grid[0][i] += grid[0][i - 1]
//     }
//     for(let i = 0 ; i <= row ; i++) {
//         grid[i][0] += grid[i - 1][0]
//     }
//     findMin(grid,row,col,sum,path)
//     console.log(path)
// }
// function findMin(grid, row , col, sum , path) {
//     if(row === 0 || col === 0) return
//     let left = grid[row][col - 1], up = grid[row - 1][col]
//     left > up ? path.push(up) : path.push(left)
//     left > up ? row = row - 1 : left === up ? row > col ? col = col - 1 : row = row - 1 : col = col - 1
//     findMin(grid,row,col,sum,path)
// }


