// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0
// 解釋一下什麼是bitwise AND , 比如說 5 與 7 這兩個數字
// 轉換成二進位 5 => 101 7 => 111 , 然後對這兩個二進位值每個位置做 &&(AND)
//     101
// AND 111
//   ------
//     101
// 也就是說在同個位置上都是1的話 , 出來的結果就是1 (1 && 1 => 1) (1 && 0 => 0)
// 而題目是給兩個值 m 與 n , m 與 n兩個值的ranga => 0 <= m <= n <= 2147483647
// 在這個 m <= num <= n m 與 n 中間所有數字 bitwise AND 後的值 , 比如說 m = 5 , n = 7
// 在這個range舊友三個數字 , 5 6 7 => 101 , 110 , 111
// result = 101 AND 110 AND 111 => 100
// 解法: 其實我們只要找開頭(最左側)都是 1 即可 , 至於後面的數字一定會有 0 與 1 , 比如說 m = 26 , n =30
// 11010
// 11011
// 11100
// 11101
// 11110
// 會發現我們只需要找前面2個1 , 我們可以借助左移 , 右移 來做
// 左移: 1100 => 1000  右移: 1100 => 1110

var rangeBitwiseAnd = function(m, n) {
    // 右移到m = n , 且計數右移的次數
    // m = n 時 , 在將m or n 左移 "右移的次數" 即可
    let count = 0
    while(m !== n) {
        count++
        m = m >> 1
        n = n >> 1
    }
    return m << count
};