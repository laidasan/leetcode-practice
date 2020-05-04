// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4
// 題目要求是 給一個 只有 0 1 的二維陣列 , 尋找最大的正方形(都要是1) , 並回傳它的面積
// 其實要求很簡單 , 要組成正方形的條件就是 , 內容都必須是1 , 那我們只需要先假設邊長(side)並嘗試尋找是否有符合邊長的正方形
// 如果有就 side++ , 往更大的正方形去尋找 , 直到找不到我們 "假設的邊長之正方形" , 代表 side - 1就是最大的正方形邊長
// 統整起來會有以下
// ● 尋找最大的正方形(only '1')
// ● 假設可能最大邊長 side , 從 [0][0]這個point開始尋找
// ● check [i][j] ~ [i + side - 1][j + side - 1] all is '1' or not  ->  iscorrect(all is '1')
// ● if iscorrect = true , 代表有符合架設最大邊長的正方形 , 繼續往 side + 1 (更大的邊長找)
// ● if iscorrect = false , 代表找不到我們假設的最大邊長之正方形 , 在matrix中最大的正方形邊長就是 side - 1
var maximalSquare = function(matrix) {
    if(matrix.length === 0) return 0
    let side = 1 , rows = matrix.length , cols = matrix[0].length
    let i = 0 , j = 0 , find = false , keepfind = true
    // keepfind = 如果假設的邊長有找到符合的正方形就繼續往更大的邊長找
    while(keepfind) {
        // find = 當找到符合的正方形就 "不用" 繼續往下找 "有沒有符合假設邊長之正方形"了 , 因為已經有符合之方形了 就直接繼續往下找更大的編長
        while(!find && i < rows + 1 - side) {
            while(!find && j < cols + 1 - side){
                // 從 [0][0] 開始遍歷整個 matrix 如果遇到是 1 的 point , 就嘗試能不能夠組成正方形
                if(matrix[i][j] === '1') {
                    // NOverflow = 防止要找的point 超出 matrix的範圍 , 必須 長、寬都要在matrix範圍內
                    // iscorrect = true 先假設能夠 找到在 side * side(邊長 * 邊長) 的範圍內 , 都是 '1' 能夠找到正方形
                    let r = i , c = j , iscorrect = true , NOverflow = (r+side) <= rows && (c+side) <= cols
                    while(iscorrect && r < i + side && NOverflow) {
                        while(iscorrect && c < j + side) {
                            // 如果有 side * side內任一個不是 1 , 代表無法組成正方形
                            matrix[r][c] !== '1' ? iscorrect = false : ''
                            c++
                        }
                        r++
                        c = j
                    }
                    iscorrect && NOverflow ? find = true : ''
                }
                j++
            }
            i++
            j = 0
        }
        find ? side++ : ''
        find ? '' : keepfind = false
        find = false
        j = 0 
        i = 0
    }
    
    side = side - 1
    return side * side
};