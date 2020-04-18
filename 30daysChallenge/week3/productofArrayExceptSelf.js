// Solution
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)



var productExceptSelf = function(nums) {
    let output = []
    
    nums.forEach((nm,index) => {
        let fwd = 1,res = 1
        for(let i = 0 ; i <= index - 1 ; i++) {
            fwd = fwd * nums[i]
        }
        for(let i = index + 1 ; i < nums.length ; i++) {
            res = res * nums[i]
        }
        
        // console.log('fwd',fwd)
        // console.log('res',res)
        
        output.push(fwd * res)
    })
    
    return output
};