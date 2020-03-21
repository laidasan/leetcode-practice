
// let nums = [-1,2,1,-4]
// let target = 1
let nums = [0,2,1,-3]
let target = -1

var threeSumClosest = function(nums, target) {
    let start = 0
    let thread = nums.length - 1
    let end = thread - 1
    let cloestNum = nums[start] + nums[end] + nums[thread]

    //第一個數字由nums[0]開始，第三個數字由最後一個數字開始，第二個數字由倒數第二個數字開始
    for(start,thread;start < nums.length - 2;start++,thread = nums.length - 1,end = thread - 1) {
        // console.log(start,end,thread)

        //第一個數字與最第三數字定住，美計算一次移動第二個數字(往第一個數字移動)
        while(thread >= 2) {
            //當第二個數字與第一個數字交會的時候，第三個數字往前(往第一個數字移動)一格，並把第二個數定重置為第三個數字的前一個，迴圈計算
            //當移動到已經不能往前時，重置第三個數字為陣列最後一個，第二個數字為第三個數字前一個，並把第一個數字移動(往後移一個位置)，迴圈計算
            //一直移動到第一個數字不能在往後移動為止
            while(start < end) {
                let sum = nums[start] + nums[end] + nums[thread]
                cloestNum = Math.abs(target - sum) < Math.abs(target - cloestNum) ? sum : cloestNum
                end--;
            }
            thread--;
            end = thread - 1
        }
    }
    return cloestNum
};

console.log(threeSumClosest(nums,target))

