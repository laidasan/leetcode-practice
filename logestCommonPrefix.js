// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// ●正規式
// ●一個一個字找

// 正規式
// 大概念:用第一個字串來做為基準，第一個字到最後一個字慢慢檢查，一檢查到某字串不符合條件的，就跳出迴圈，並回傳結果
// let reg = new RegExp(`^(${firstStr.substring(0,end)})`)  => 利用substring來建構正規式
// 當還沒找到 且 end 還沒到最後一個index時 (end最長為第一個字串的長度) 就繼續找，並更新建構式與結果
// 那些情況會找到?
// ● 傳入的每個字串有一個 reg.test 回傳 false 就代表需要停止了，因為找到了其中有一個不符合 => isfind = true
// ● 基準字串從頭找到尾都通過，就跳出迴圈
// 再加上一些例外排除即可

function longestCommonPrefix(strs) {
    if(strs.length === 0 || !strs[0]) return ''
    if(strs.length === 1) return strs[0]
    
    // let firstStr = strs[0].split('') , ch = 0 , count = 0 , start = 0 , end = 1  //

    // firstStr為字串列中第一個字串，當作基準 ; count 用來跑字串陣列Index，逐個檢查 ; end 用來取得 substring
    let firstStr = strs[0] , count = 1 , end = 1
    let str = ''
    let reg = new RegExp(`^${firstStr.substring(0,end)}`)
    let isfind = false

    while(!isfind && end <= firstStr.length) {
        while(count < strs.length) {
            //一有不符合的就代表已經找到了，不必繼續往下找了
            if(!reg.test(strs[count])) isfind = true
            count++
        }

        // 全部字串陣列都通過，而且還沒找到時就更新結果與正規式，並reset count and end++
        if(count === strs.length && !isfind) {
            count = 1
            str = firstStr.substring(0,end)
            end++;
            reg = new RegExp(`^(${firstStr.substring(0,end)})`)
        }
    }
    
    return str
}
console.log(longestCommonPrefix(["flower","flow","flight"]))



// wrong answer
// ; (function () {
//     let commons = ['flower', 'flow', 'flight'];
//     function logestCommonPrefix(strs) {
//         if(strs.length === 0){return '';}
//         let longestCommon = '';
//         let count = 0;
        
//         while(isSamePrefix(strs[0][count],count,strs)) {
//             longestCommon += strs[0][count];
//             count++;
//         }

//         function isSamePrefix(s,index,strs) {
//             let isSame = true;
//             let runtimes = 0;
//             while(isSame && runtimes < strs.length) {
//                 if(s !== strs[runtimes][index]) {
//                     isSame = false;
//                 }
//                 runtimes++;
//             }
//             return isSame;
//         }
//         return longestCommon;


//         // let firstCommon = strs[0].split('');
//         // while (strs.every((str) => str[count] === firstCommon[count])) {
//         //     longestCommon += firstCommon[count];
//         //     count++;
//         // }


//         // for(let i = 0;i < strs.length;i++) {
//         //     for(let j = i + 1;j < strs.length;j++) {
//         //         let now = strs[i].toLowerCase();
//         //         let next = strs[j].toLowerCase();
//         //         let longest = '';
//         //         let count = 0;
//         //         while(now[count] === next[count]){
//         //             longest += now[count];
//         //             count++;
//         //         }
//         //         longestCommon = longest.length > longestCommon.length ? longest : longestCommon;
//         //     }
//         // }

//     }
    

//     console.log(logestCommonPrefix(commons));
})();
