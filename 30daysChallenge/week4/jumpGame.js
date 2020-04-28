// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

// 題目的要求是:
// 從陣列中第一個開始跳 , 而最大跳躍次數初始值為第一個index = 0的值 , 而陣列中的每個值都是代表者最大跳躍次數 , 判斷能不能夠到達最後index
// 看題目給的Example 與 自己測試後 , 可以發現以下
// ● maxJump會更新 , 當更新後可跳躍次數也會跟著初始化(變成maxJump)
// ● 只要剩餘可跳躍次數 <= 跳到的該個陣列值 , maxJump就更新
// 事實上只要我們只需要注意 maxJump是不是要更新即可 , 只要maxJump一更新 , 連同可跳躍次數就可以更新
// ● 每跳一次 , maxJump--
// ● 美跳一次就判斷該值是不是 >= maxJump , 是的話就更新maxJump
// ● 值到 maxJump = 0 or 到達終點
var canJump = function(nums) {
    if(nums.length === 1 || nums.find(nm => nm <= 0) === undefined) return true
    let maxJump = nums[0] , i = 0
    
    while(maxJump > 0 && i !== nums.length - 1){
        i++
        maxJump--
        nums[i] >= maxJump ? maxJump = nums[i] : ''
    }
    return i === nums.length - 1
};