// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.



// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

// let text1 = 'acbde'
// let text2 = 'fgbed'
// let text1 = "oxcpqrsvwf"
// let text2 = "shmtulqrypy"
// let text1 = "mhunuzqrkzsnidwbun"
// let text2 = "szulspmhwpazoxijwbq"
let text1 = 'ace'
let text2 = 'abcde'

// LCS 演算法
// 棋盤式的解法 , 以 text1 = 'ace' , text2 = 'abcde'來解釋
// !    a  b  c  d  e
//   0  0  0  0  0  0
// a 0 
// c 0
// e 0
// 先這樣子將棋盤畫出 , 然後開始填 , 以下為判斷規則
// ● 若 text1 = text2 , [i][j] = [i - 1][j - 1] + 1
// ● 若 text1 != text2 , [i][j] = max( [i][j - 1] , [i - 1][j] )
// 填完後變成
// !    a  b  c  d  e
//   0  0  0  0  0  0
// a 0  1  1  1  1  1
// c 0  1  1  2  2  2
// e 0  1  1  2  2  3
// 雖然 [text1.length][text2.length] 就是結果(長度)了 , 但還是講解移下路徑如何判斷
// ● 從最右下角開始 , 往 上 or 左 or 左上
// ● 若 [i - 1][j - 1] + 1 = [i][j] , 則該位置為 common longest subquence 其中之一 , 且往左上走 , 否則
// ● 否則往 max( [i][j - 1] , [i - 1][j]) (較大的方向)走
function longestCommonSubsequence(text1,text2) {
    let rows = text1.split('').map(ch => [0])
    rows.unshift(text2.split('').map(ch => 0))
    rows[0].push(0)

    for(let i = 1 ; i <= text1.length ; i++) {
        for(let j = 1 ; j <= text2.length ; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                rows[i][j] = rows[i - 1][j - 1] + 1
            }else {
                rows[i][j] = rows[i][j - 1] > rows[i - 1][j] ? rows[i][j - 1] : rows[i - 1][j]
            }
        }
    }

    return rows[text1.length][text2.length]
} 
console.log(longestCommonSubsequence(text1,text2))



// 以下都是 wrong answer

// var longestCommonSubsequence = function (text1, text2) {
//     if (text1 === '' || text2 === '') return 0

//     let firstFind = false, i = 0, j = 0, result = {}, resultPropI = {}, longest = 1
//     while (i < text1.length) {
//         while (j < text2.length) {
//             if (text1[i] === text2[j]) {
//                 firstFind = true
//                 // 用 j 當 prop名稱 , value 是 i
//                 !result.hasOwnProperty(j) ? result[j] = i : ''
//                 // i 當Prop名稱 , value 是 j
//                 resultPropI.hasOwnProperty(i) ? (() => {
//                     resultPropI[i].find(ele => ele === i) === undefined ? resultPropI[i].push(j) : ''
//                 })() : resultPropI[i] = [j]
//             }
//             j++
//         }
//         i++
//         j = 0
//     }

//     if (firstFind) {
//         let resultKeys = Object.keys(result)
//         let resultAry = Object.keys(result).reduce((ary, key) => {
//             ary.push(result[key])
//             return ary
//         }, []).sort((a, b) => a - b)
//         console.log(resultAry)
//         // let temp = 1 , tempAry = []
//         // result.forEach((ele,index) => {
//         //     tempAry.push(ele)
//         //     for(let i = index + 1 ; i < result.length ; i++) {
//         //         for(let j = i ; j < result.length ; j++) {
//         //             if(result[j] > tempAry[tempAry.length - 1]) {
//         //                 temp++
//         //                 tempAry.push(result[j])
//         //             }
//         //         }
//         //         longest = tempAry.length > longest ? tempAry.length : longest
//         //         tempAry = [ele]
//         //     }
//         //     tempAry = []
//         // })
//     }
//     // console.log(result)
//     console.log(resultPropI)
//     return longest
// };
// console.log(longestCommonSubsequence(text1, text2))



// // var longestCommonSubsequence = function(text1, text2) {
// //     let longest = 0 , first = findFirstCommon(text1,text2)
// //     while(first) {
// //         text1 = text1.substring(first[0] + 1,text1.length)
// //         text2 = text2.substring(first[1] + 1,text2.length)
// //         first = findFirstCommon(text1,text2)
// //         longest++
// //     }
// //     return longest
// // };

// function findFirstCommon(text1, text2) {
//     if (text1 === '' || text2 === '') return false

//     let firstFind = false, i = 0, j = 0, first = [], result = 0, longest = 1
//     while (i < text1.length) {
//         while (j < text2.length) {
//             if (text1[i] === text2[j] && first.find(ele => ele === j) === undefined) {
//                 firstFind = true
//                 // first.push([i,j])
//                 first.push(j)
//             }
//             j++
//         }
//         i++
//         j = 0
//     }

//     if (firstFind) {
//         let temp = 1
//         for (let i = 1; i < first.length; i++) {
//             if (first[i] > first[i - 1]) {
//                 temp++
//             } else {
//                 longest = temp > longest ? temp : longest
//                 temp = 1
//             }
//         }
//     }
//     // console.log(first)
//     return longest
// }
// // console.log(findFirstCommon(text1,text2))

// console.log(longestCommonSubsequence(text1, text2))



// function lonSub(ary) {

//     let lengthAry = ary.map(ele => 1) , longest = 1
    
//     for (let i = 0; i < ary.length; i++) {
//         for (let j = i + 1; j < ary.length; j++) {
//             if (ary[j] > ary[i]) {
//                 lengthAry[j] > lengthAry[i] + 1 ? '' : lengthAry[j] = lengthAry[i] + 1
//             }
//         }
//     }
    
//     longest = lengthAry.reduce((pre, thisnm) => pre > thisnm ? pre : thisnm)
//     return longest
// }
// // let test = [4,15,17,9,6,8,11,5,1,7,3,19,0,2,10]
// let test = [4,15,9,6,7,8,10,11,5,1,2,3,17,19,0]
// console.log(lonSub(test))

