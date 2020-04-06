//problem 868
//重點在於
//1. 10進制如何轉2進制
//2. 題目要求
//第一點「10進制如何轉2進制」非常簡單，將10進制數字除以2，一直除到商=0，在把餘數從最後一個寫到第一個，就是2進制了
//比如說17這個數字
//  17 / 2 -> 8 ----- 1   ↑   
//  8 / 2 -> 4 ----- 0    |                      方向 → → →
//  4 / 2 -> 2 ----- 0    |    由下往上寫成    =>  10001
//  2 / 2 -> 1 ----- 0    |
//  1 / 2 -> 0 ----- 1    |
//反過來說第一個算出來的餘數就是最後一位，由上往下寫的話從屁股開始往前寫就好

//2. 題目敘述
// leetcode
// Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.
// If there aren't two consecutive 1's, return 0.
// 假如17換成2進制為10001，題目要求的是每1與1之間的最常長度(也就是中間間隔0最多的長度)，最低長度為1，也就是假設 N為 11000，result回傳1
//而 假設N為 10001 ，result回傳4，而如果換成二進制為 1000 ，因為1只有一個沒有成對(閉合)，所以result回傳0 



// example

// Example 1:
// Input: 22
// Output: 2
// Explanation: 
// 22 in binary is 0b10110.
// In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
// The first consecutive pair of 1's have distance 2.
// The second consecutive pair of 1's have distance 1.
// The answer is the largest of these two distances, which is 2.

// Example 2:
// Input: 5
// Output: 2
// Explanation: 
// 5 in binary is 0b101.

// Example 3:
// Input: 6
// Output: 1
// Explanation: 
// 6 in binary is 0b110.

// Example 4:
// Input: 8
// Output: 0
// Explanation: 
// 8 in binary is 0b1000.
// There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.






//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Binary Gap.


function binaryGap(N) {
    let start = false  //當計算到第一個餘數為1的時候，開始計算長度
    let longest = 1
    let count = 1,count_one = 0 //計數餘數為1的次數，如果小於2就是類似於 1000 ，1沒有成對(閉合)
    // >= 0 是因為第一次商 = 0的時候還需要計算一次
    //所以在最後算完時，就把N - 1 跳出迴圈
    while( Math.floor(N / 2) >= 0) {
        if(N % 2 === 1) {
            count_one++
            start = true
            longest = count > longest ? count : longest
            count = 1
        }
        if(start && (N % 2 === 0)) {
            count++;
        }
        
        N = Math.floor(N / 2)
        N ? '' : N--
    }
    
    return count_one < 2 ? 0 : longest
}

console.log(binaryGap(8))
