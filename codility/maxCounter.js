// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// function solution(N, A);

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].
// Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


// 要求
// Detected time complexity: O(N + M)

// 看上去好做，但是時間複雜度要是O(N + M)
// 遍歷Input 的陣列時(A)，每次把最大值(max)記錄下來
// 當要去對result(要回傳的陣列)做 ++ 的時候，檢查有沒有小於lastmax(經過 N + 1 ，全部陣列reset置 max 的時候，lastmax就會更動(lastmax = max)，不然初始值就是0)
// 有的話先把result[index](準備更動的值)提升到lastmax，再去做 ++ 的動作
// 最後在遍歷一次result陣列，把小於lastmax的部分全部提升到lastmax

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0
    let lastmax = 0
    let result = new Array(N).fill(0)
    
    A.forEach(nm => {
        if(nm <= N) {
            result[nm - 1] = result[nm - 1] < lastmax ? lastmax : result[nm - 1]
            result[nm - 1]++
            max = result[nm -1] > max ? result[nm - 1] : max
        }else {
            lastmax = max
        }
    })
    
    for(let i = 0; i < result.length; i++) {
        result[i] < lastmax ? result[i] = lastmax : ''
    }
    
    return result
}
