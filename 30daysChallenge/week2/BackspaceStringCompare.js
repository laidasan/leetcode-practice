// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?


function backspaceCompare(S,T) {

    while(S.indexOf('#') !== -1) {
        let index = S.indexOf('#')
        if(index === 0) {S = S.slice(1,S.length)} else {
            S = S.slice(0,index - 1).concat('',S.slice(index + 1,S.length))
        }
    }
    while(T.indexOf('#') !== -1) {
        let index = T.indexOf('#')
        if(index === 0) {T = T.slice(1,T.length)} else {
            T = T.slice(0,index - 1).concat('',T.slice(index + 1,T.length))
        }
    }
    console.log(S,T)
    
    return S === T
}

// console.log(backspaceCompare('ab#c','ab#c'))
console.log(backspaceCompare("y#fo##f","y#f#o##f"))

