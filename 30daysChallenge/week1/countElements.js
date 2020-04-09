// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.

// 給一個陣列，計算有幾個 元素 是 元素值 + 1 之後的值也在陣列裡面


// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.


function countElements(arr) {
    let count = 0

    //也可以不用hash
    // let hash = {}
    // for(let i = 0; i < arr.length ; i++) {
    //     if(arr.find(ele => ele === arr[i] + 1)) {
    //         hash[arr[i]] = true
    //         count++
    //     }else {
    //         hash[arr[i]] = false
    //     }
    // }

    // 不用hash 直接記數就好
    for(let i = 0; i < arr.length ; i++) {
        if(arr.find(ele => ele === arr[i] + 1)) count++
    }

    return count;
}

console.log(countElements([1,3,2,3,5,0]))