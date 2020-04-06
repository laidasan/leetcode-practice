// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

//算出這些數字掉入迴圈
// ary = [4,16,37,58,89,145,42,20]

function isHappy(n) {
    let cycleNumbers = [4,16,37,58,89,145,42,20]
    let result = 0
    while(!cycleNumbers.some(cycleNum => result === cycleNum) && result !== 1) {
        result = n.toString().split('').reduce((result,num) => {
            result += Math.pow(parseInt(num),2)
            return result
        },0)
        n = result
    }
    return result === 1 ? true : false
}

console.log(isHappy(23))
