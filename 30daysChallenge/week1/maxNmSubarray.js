// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


//an

// 一個一個加進來是沒錯的
// 只不過當加進來後小於0的話
// 就重新開始重0計算
// function maxSubArray(nums) {
//     let maxn = -Number.MAX_VALUE;
//     let sum = 0;

//   nums.forEach(function(item, index, array) {
//     sum += item;

//     if (sum > maxn)
//       maxn = sum;

//     if (sum < 0)
//       sum = 0;
//   });
//   return maxn;
// }

// my answer(after look solution)
function maxSubArray(nums) {
    let maxm = nums[0]
    let sum = 0
    nums.forEach(nm => {
        sum += nm
        
        maxm = sum > maxm ? sum : maxm
        sum = sum < 0 ? 0 : sum
    })
    return maxm
}



// function maxSubArray(nums) {
//     let largest = nums.reduce((largest,num) => {
//         largest = largest > num ? largest : num
//         return largest
//     })
//     return findLargest([nums],largest)
// }

// function findLargest([ary],largest) {
//     //find all array
//     let allArray = findALLArray([ary],[])
//     while (allArray[allArray.length - 1].length !== 1) {
//         allArray  = findALLArray(allArray,[])
//     }
//     console.log('result',allArray)

//     let largeAry = allArray.reduce((ary,nextary) => {
//         let large = ary.reduce((nm,nextnm) => {
//             return nm > nextnm ? nm : nextnm
//         })
//         let largeNext = nextary.reduce((nm,nextnm) => {
//             return nm > nextnm ? nm : nextnm
//         })
//         largest = large > largest || largeNext > largest ? large > largeNext ? large : largeNext : largest
//         console.log(largest)
//         return large > largeNext ? ary : nextary
//     })
//     console.log(largeAry)

//     return largest
// }

// function findALLArray (allary,outputAry) {
//     allary.forEach(ary => {
//         outputAry.push(ary)
//         let isMergeAry = mergeAryElement(ary)
//         isMergeAry.forEach(mergeAry => {
//             outputAry.push(mergeAry)
//         })
//     })
//     return outputAry
// }

// function mergeAryElement(ary) {
//     let aryOne = [],aryTwo = []
//     if(ary.length % 2 !== 0) {
//         merge(ary,aryOne,aryTwo)
//         aryOne.push(ary[ary.length - 1])
//         aryTwo.unshift(ary[0])
//     }else if (ary.length % 2 === 0 && ary.length !== 2){
//         merge(ary,aryOne,aryTwo)
//         aryTwo.unshift(ary[0])
//         aryTwo.push(ary[ary.length - 1])
//     }else if(ary.length === 2){
//         aryOne.push(ary[0] + ary[1])
//         aryTwo.push(ary[0] + ary[1])
//     }

//     return [aryOne,aryTwo];
// }

// function merge(ary,aryOne,aryTwo) {
//     for(let i = 0;i < ary.length - 1;i += 2) {
//         aryOne.push(ary[i + 1] + ary[i])
//     }
//     for(let i = 1;i < ary.length - 1;i += 2) {
//         aryTwo.push(ary[i + 1] + ary[i])
//     }
// }



// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))   //6
// console.log(maxSubArray([-2,-3,-1]))  //-1
// console.log(maxSubArray([8,-19,5,-4,20]))   //21
// console.log(maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]))   //21
// console.log(maxSubArray([31,-41,59,26,-53,58,97,-93,-23,84]))

//一個一個加進來，如果合變小了就把陣列中最小的踢出去
//但不符合題目需求，題目需求是要連續的陣列數字
// function maxSubArray(nums) {
//     let resultAry = []
//     let largest = nums[0] - 1
//     nums.forEach(num => {
//         if(resultAry.some(nm => nm === num)){return}
//         resultAry.push(num)
//         resultNum = resultAry.reduce((sum,nm) => {
//             sum += nm
//             return sum
//         },0)
//         resultNum > largest ? largest = resultNum : (() => {
//             let smallestNum = resultAry.reduce((smallest,num) => {
//                 smallest = smallest > num ? num : smallest
//                 return smallest
//             })
//             resultAry.splice(resultAry.findIndex(nm => smallestNum === nm),1)
//         })()
//     })
//     return largest
// }

// console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]))