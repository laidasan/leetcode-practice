// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

// ※ 需要連續時 , 可以想想hash
// 解法是用hash去紀錄 sum 出現的次數 , 每次去找 sum - k 值出現的次數
// 為何是 sum - k 呢? 舉個例子比較好懂 , 比如我們input nums:[1,1,1,1]  k:2
// 遍歷整個nums 把每個 0 到 i 的合算出 , 紀在陣列 => (一開始sum = 0),會得到 [1,2,3,4] , 再加上最一開始的sum 為 0 => [0,1,2,3,4]
// 再來遍歷我們得到的陣列 [0,1,2,3,4] , 搜索 該i(index) 之前 sum - k 在該陣列出現的次數 , 比如說 2 , 那我們就去找 2 - 2 = 0 , index 2 之前 0出現的次數
// 即為 合為 k 的 subarray 個數 , 再把它展開來看會像是:
// => [0,([1]),([1,1])....]
// 再看一個例子 , 比如[0,1,2,3,4] 中的 index 3 , 合為3 , 就要找 3 - 2 = 1 , index 3 之前 合為 1 出現的次數 , 展開來
// => [0,([1]),([1,1]),([1,1,1])..]  [1,1,1] 為 整個subarray 去剪掉 裡面的 [1] subarray => [1,1] 就得到合為2的subarray
// 再原陣列看位置是在 => [1,(1,1),1] ()中的subarray
// 所以才會是要找 sum - k 值出現的次數
function subarraySum(nums, k) {
    let result = 0 , hash = {0:1} ,sum = 0
    for(let i = 0 ; i < nums.length ; i++) {
        sum += nums[i]
        hash.hasOwnProperty(sum - k) ? result = result + hash[sum - k] : console.log('false')
        hash.hasOwnProperty(sum) ? hash[sum]++ : hash[sum] = 1
    }
    
    return result
}