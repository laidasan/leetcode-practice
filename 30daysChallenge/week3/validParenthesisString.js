// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// 自己的解法
// 先弄清楚條件，條件為
// ● '(' 一定要有一個配對的 ')'
// ● ')' 一定要有一個配對的 '('
// ● '(' 一定要在 ')' 前面
// ● '*' 可以代表 '(' , ')' , 或是不使用它
// 可以先從將條件少量的加上去，一開始先不理會 '*' 的處理 , "由頭至尾"遍歷整個字串,建立一個sum 值(初始為0),當碰到 '(' 就 sum++, ')' 就 sum--
// 這樣的條件下有幾種情況
// sum < 0 , 代表其中一個 ')' 在 '(' 前面，違反第三個條件
// sum > 0 , 代表有一個 '(' 沒有 配對 
// sum === 0 , '(' 與 ')'都有配對 , 且數量相同
// 接下來加入 '*' 的處理
// 只處理當sum 為負值時去檢查，該位置的')'前面有沒有可以用的 '*' 可以使用並配對
// 到最後的結果情況可能為
// ● 字串裡有 "空字串" , 所以跳出迴圈 
// ● sum < 0 , 卻沒有 '*' 可以使用去配對
// ● 遍歷整個字串 , sum === 0 , 代表 '(' 與 ')' 數目相同 , 且都能夠配對 (不能配對的情況已經在 sum < 0 去判斷處理了)
// ● 遍歷整個字串 , sum > 0 , 這時檢查 "可使用的 '*' 數量 ,  有沒有 >= sum " , 但注意，並不代表能夠完全配對 , 所以要在從尾到頭做相同的事情
//   並去比對兩個結果 , 都為 true 才是能夠完全的配對 
// 簡單來說就是:
// 從頭到尾的遍歷 , 處理 sum < 0 時 是處理 ')' 的配對問題
// 從尾到頭的遍歷 , 處理 sum < 0 時 是處理 '(' 的配對問題

function checkValidString(s) {
    if(s === '') return true
    
    let sAry = s.split('')
    let resultLeftToRight = true
    let resultRightToLeft = true
    // un用來記錄 '*' 所在的位置(index)
    let sum = 0 , emptyStr = false , i = 0 , un = []
    
    //從左到右遍歷一次
    while(!emptyStr && resultLeftToRight && i < sAry.length) {
        if(sAry[i] === ' ') emptyStr = true
        
        switch (sAry[i]) {
            case '(' :
                sum++
                break;
            case ')' :
                sum--
                break;
            case '*' :
                // push * 所在的 index 位置
                console.log('push')
                un.push(i)
                break;
        }
        console.log(un)

        // 處理sum < 0 時，馬上檢查該位置的前面有沒有 '*' 可以使用
        // 有的話就使用並把該位置的 * 抽離陣列
        if(sum < 0) {
            console.log('sum < 0')
            if(un.find(index => index < i) !== undefined) {
                console.log('use *')
                sum++
                un.splice(un.findIndex(index => index < i),1)
            }else {
                console.log('error')
                resultLeftToRight = false
            }
        }
        i++
    }
    
    resultLeftToRight = emptyStr ? false : sum === 0 ? true : un.length >= Math.abs(sum) ? true :false
    
    i = sAry.length - 1 , un = [] ,  sum = 0 , emptyStr = false
    
    // 從又到左遍歷一次
    while(!emptyStr && resultRightToLeft && i >= 0) {
        if(sAry[i] === ' ') emptyStr = true
        
        switch (sAry[i]) {
            case '(' :
                sum--
                break;
            case ')' :
                sum++
                break;
            case '*' :
                // push * 所在的 index 位置
                un.push(i)
                break;
        }
        
        // 這裡與從左到右不一樣的地方為
        // 遇到 '(' => sum-- , ')' => sum++
        // sum < 0 時 => '(' 需要找一個 '*' 來配對 (往尾端找)
        if(sum < 0) {
            if(un.find(index => index > i) !== undefined) {
                sum++
                un.splice(un.findIndex(index => index > i),1)
            }else {
                resultRightToLeft = false
            }
        }
        i--
    }
    
    resultRightToLeft = emptyStr ? false : sum === 0 ? true : un.length >= Math.abs(sum) ? true :false

    // console.log(resultLeftToRight)
    // console.log(resultRightToLeft)
    
    // 從又到左 與 從左到右的解果都需要為 true 才回傳 true
    return resultLeftToRight && resultRightToLeft
}