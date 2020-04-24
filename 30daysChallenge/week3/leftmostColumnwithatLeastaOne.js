// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [rows, cols], which means the matrix is rows * cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

// Constraints:

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] is either 0 or 1.
// mat[i] is sorted in a non-decreasing way.

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */

// 這題的題目要求是: 給一個 binaryMatrix , 從這了裡面中找到最靠左側出現1的那一個col
// binaryMatrix中的陣列只有 0 與 1 , 而且都經過排序 (non-decreasing) ※non-decreasing為 "無遞減" , 也就是 可以是遞增,也可以是相等 
// 也就是可以是 [1,2,3,4] or [1,1,2,3] , 但binaryMatrix陣列中只有 0 與 1 , 排序後一定是 0 在 1 前面
// 舉個例子: 
//  binaryMatrix : [[0,0,0],[0,1,1]] 
//       col
//        ↓
// row → [0,0,0]
//       [0,1,1]
// return 1 , 最靠近左側,至少出現一個 1 的就是 1col (0為開頭)
// 題目還有些條件:
// ● 只能使用binaryMatrix的方法訪問binaryMatrix , 共有兩個方法
//   ○ binaryMatrix.get(row,col) => 取得 [row,col] 的值 , return number
//   ○ binaryMatrix.dimensions() => 取得 有幾多少的rows與cols , return [rows,cols]
// ● 使用get()方法次數不超過1000次 , 否則結果會判為 wrong answer
// 當然binaryMatrix也有規格:
// ● rows == mat.length
// ● cols == mat[i].length
// ● 1 <= rows, cols <= 100
// ● mat[i][j] is either 0 or 1.
// ● mat[i] is sorted in a non-decreasing way.
// --------------------------------------------------
// 正因為有次數限制 , 所以不能每一個值都去遍歷 , 所以就可以這麼做:
// ● 因為陣列都是經過排序的 , 1都是在陣列最後面 , 所以我們可以從最後一個col開始找 , 遇到 0 就代表在往前都會是0 , 所以就可以往下一個row找,不用再往前遍歷了
// ● 往下個row找的時候 , 不用再從最後col找 , 只需要當前的col - 1並往下往下移動一個row即可

function leftMostColumnWithOne(binaryMatrix) {

    let row = binaryMatrix.dimensions()[0], col = binaryMatrix.dimensions()[1]
    let result = -1, isfind = false, i = 0, j = col - 1
    while (!isfind && i < row) {
        while (j >= 0) {
            if (binaryMatrix.get(i, j) === 0) {
                // 如果取得的值為0有幾種情況
                // ● 最後一個col是0 , 代表該row沒有1直接跳下 1 row
                // ● 最後一個col不為0 , 代表最靠近左側的col 為 j + 1
                j === col - 1 ? '' : result = j + 1
                // j === col - 1 ? '' : result = result === -1 ? j + 1 : j + 1 < result ? j + 1 : result
                // j = - 1來跳出迴圈
                j = -1
            } else {
                j === 0 ? result = 0 : ''
                j--
            }
        }
        // 如果已經找到 0 col 就不用在移動row找了(因為答案就是 0了 , 不會有更靠近的col)
        result === 0 ? isfind = true : ''
        // 同一個col,往下一個row即可
        // 有使用 j = -1 來跳出迴圈,所以要把 j 給設定回來(上個col)
        i++
        j = result === -1 ? col - 1 : result - 1

    }

    return result
}

 // wrong answer
 // too many call binaryMatrix.get() 
 // 題目有規定要少於1000次
// var leftMostColumnWithOne = function(binaryMatrix) {
//     let row = binaryMatrix.dimensions()[0] , col = binaryMatrix.dimensions()[1] , result = -1 , isfind = false
//     let i = 0 , j = 0
//     while(!isfind && i < col) {
//      while(!isfind && j < row) {
//          binaryMatrix.get(j,i) === 1 ? isfind = true : j++
//      }
//         isfind ? result = i : ''
//         i++
//         j = 0
//     }

//     return result
// };