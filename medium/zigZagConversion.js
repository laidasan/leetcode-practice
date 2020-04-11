// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 這題看似複雜，其實很簡單，看懂要求很重要
// 題目要求的是:
// 傳入一個字串 , 一個數字，數字代表 row 數，之字形的把字串的字元依依傳入row裡面，並回傳整個修改過後的字串
// ● 什麼是之字形
// 假如傳入的字串為: "IAMJOEHELLO" , 數字為 3 
// 代表有三個row           [          ]
// 代表有三個row           [          ]
// 代表有三個row           [          ]
//
// 之後按照右邊數字依序填入rows   [0,4,8]           
// 之後按照右邊數字依序填入rows   [1,3,5,7,9,11]
// 之後按照右邊數字依序填入rows   [2,6,10]


let s = "PAYPALISHIRING" , numRows = 4
function convert (s, numRows) {
    if(numRows === 1) return s

    let r = 0 , zigzaging = false
    let rows = []
    for(let i = 0; i < new Array(numRows).length;i++) {
        rows.push([])
    }
    
    for(let i = 0; i < s.length;i++) {
        rows[r].push(s[i])

        r === 0 || r === (numRows - 1) ? zigzaging = !zigzaging : ''
        zigzaging ? r++ : r--
    }
    return rows.reduce( (str,row) => str + row.join(''),'')
};

console.log(convert(s,numRows))



