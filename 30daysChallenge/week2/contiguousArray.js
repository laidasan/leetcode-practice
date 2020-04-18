// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.


// 解法視頻 https://www.youtube.com/watch?v=uAGt1QoAoMU
// 下面這種解法:
// 我們從頭開始遍歷，並計算sum , 怎麼計算呢? 從頭開始遍歷，遇到 0 就 sum - 1 , 遇到 1 就 sum + 1
// 也就是把原本的0改成-1來看，比如說,[0,0,1,1,1] => [-1,-1,1,1,1],根據sum的結果，有以下幾種情況，
// ● sum = 0 , 這時從頭到 計算出 sum 為 0 的這個位置，就是最長的長度
// ● sum != 0 , sum 不等於 0 時，所們用一個hash來記錄這些 sum值 , 怎麼紀錄?紀錄什麼呢?
// 以[0,1,1,0,1,1] 來做例子 , 設置一開始的sum = 0 , 從頭開始遍歷
// value: 0 , index: 0  => sum-- , sum = -1,幾查hash裡面有沒有記錄過-1第一次出現時的index，沒有的話記錄成 {sum : index} => {-1 : 0}
// value : 1 , index: 1 => sum++, sum = 0 , 直接更新最長值 = index + 1
// value : 1 , index : 2 => sum++ , sum = 1 , 檢查hash裡面有沒有記錄過1第一次出現時的index，沒有的話記錄成{-1 : 0 , 1 : 2}
// value : 0 , index : 3 => sum-- , sum = 0 , 直接更新最長值 = index + 1
// value : 1 , index : 4 => sum++ , sum = 1, 檢查hash裡有沒有記錄過1第一次出現時的index，有的話就代表，長度 = nums[ hash[sum] ] 至 index => index - hash[sum] => 2 , 再去跟目前最長長度做比較來更新最長長度
// value : 1 , index : 5 => sum++ , sum = 2 , 檢查hash裡有沒有記過2第一次出現時的index，沒有的話記錄成{-1 : 0 , 1 : 2 , 2 : 5}

function findMaxLength(nums) {
    let hash = {} , sum = 0 , longest = 0

    nums.forEach((nm,index) => {
        nm === 0 ? sum-- : sum++
        if(!hash.hasOwnProperty(sum) && sum !== 0) {
            hash[sum] = index
        }else {
            if(sum === 0) {
                longest = index + 1
            }else {
                longest = longest > index - hash[sum] ? longest : index - hash[sum]
            }
        }
    })

    return longest
};


// function findMaxLength(nums) {
//     let sum = 0 , length = 0 , count = 0

//     for(let i = 0;i < nums.length;i++) {
//         nums[i] === 0 ? sum-- : sum++
//         if(sum !==0 ) {
//             count++
//         }else {
//             length += count
//             count = 0
//         }
//     }
// }