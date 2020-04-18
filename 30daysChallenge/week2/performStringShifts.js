// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

 

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 

// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

function stringShift(s,shift) {
    let move = 0 , sary = s.split('')

    // 不用一個一個 shift array 去操作，直接算出來最終移動結果就好
    // [0,1] => 0 = left shift , amount 1 等於 移動次數
    // 遇到 left shift 時,move-- amount次數 ; 遇到 right shift 時,move++ amount次數
    shift.forEach(sh => {
        for(let i = 1;i <= sh[1];i++) {
            // sh[0] = 0 = left shift => move--
            // sh[0] = 1 = right shift => move++
            sh[0] ? move++ : move--
        }
    })
    if(move > 0) {
        for(let i = 1; i <= move; i++) { sary.unshift(sary.pop()) }
    }else {
        for(let i = 1;i <= -move; i++) { sary.push(sary.shift()) }
    }
    
    return sary.join('')
}
