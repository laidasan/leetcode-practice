//太花費時間，失敗
// let str = 'jbpnbwwd';
// function longestSubstring(s) {
//     let temp = [];
//     let result = [];
//     let finalResult = [];
//     let length = 0;
//     let str = Array.from(s);

//     //從第一個字開始找最長的subString
//     //找完了再從第二個字開始找
//     while(str.length > 0) {
//         //算出每種可能，當有重複的時候就push到result裡面，並把temp清空(如果重複的字"不"在最後一個index的話就留下最後一個字)
//         str.forEach((char) => {
//             if(temp.join('').includes(char) && temp.join('').indexOf(char) === temp.join('').length - 1) {
//                 result.push(temp.join(''));
//                 temp = [];
//             }else if(temp.join('').includes(char)){
//                 result.push(temp.join(''));
//                 temp.splice(0,temp.length - 1);
//             }

//             temp.push(char);
//         })

//         result.push(temp.join(''));
//         //從這次的result中取最長的長度
//         let longestLength = result.reduce((lg,item) => {
//             lg = item.length > lg ? item.length : lg;
//             return lg;
//         },0)

//         finalResult.push(longestLength);
//         result = [];
//         temp = [];
//         str.splice(0,1);
//     }


//     //取最長的長度
//     finalResult.forEach((lg) => {
//         length = length > lg ? length : lg;
//     })
//     return length;
// }




//成功，但還有成長空間，可利用Set
// let str = 'pwwkew';
// function longestSubstring(s) {
//     let temp = [];
//     let length = 0;
//     let str = s;

//     while(str.length > 0) {
//         for(let i = 0; i < str.length;i++) {
//             if(temp.join('').includes(str[i])){
//                 break;
//             }
//             temp.push(str[i]);
//         }
//         length = temp.length > length ? temp.length : length;
//         temp = [];
//         str = str.slice(1);
//     }
//     return length;
// }
// console.log(longestSubstring(str));



//改良，使用Set來增強，不使用break邁進(好架構)
// let str = 'qusvbspk';
// function longestSubstring(s) {
//     let temp = new Set();
//     let longestLength = 0;
//     let l = 0;
//     let str = s;

//     for (let i = 0; i < str.length; i++) {

//         //跟上一個if裡面做一樣的事情
//         //但不一樣的是我們直接從查到有重複地方之後開始找
//         //不用再重頭從第二個找
//         //因為回去從第二個開始找，還是會在一樣的地方重複，所以可以不用去計算
//         //比如說: q u s v b s p k 這個字串
//         //當我們set.add到q u s v b 後要再add  s的時候就重複了
//         //我們就把最前面到重覆的地方( q u s)刪掉
//         //再加入s，這時候就會變成 v b s，開始重新計string!!
//         //l是為了計算上次刪除字串到哪個位置了

//         while (temp.has(str[i])) {
//             temp.delete(s[l]);
//             l++;
//         }
//         temp.add(s[i]);
//         longestLength = temp.size > longestLength ? temp.size : longestLength;

//     }
//     return longestLength;
// }
// console.log(longestSubstring(str));




//不用Set的版本
let str = 'qusvbspk';
function longestSubstring(s) {
    let temp = [];
    let longestLength = 0;
    let str = s;


    //不用Set的版本
    //但邏輯是一樣的
    //當遇到重複的字的時候把temp開頭到重覆的地方刪除
    //再開始塞字
    //同時更新紀錄longesLength
    for(let i = 0; i < str.length;i++) {

        while(temp.find((char) => char === str[i])) {
            temp.shift();
        }
        
        temp.push(str[i]);
        longestLength = temp.length > longestLength ? temp.length : longestLength;
    }
    return longestLength;
}
console.log(longestSubstring(str));