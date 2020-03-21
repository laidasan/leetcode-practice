let s = 'abcbba';
function longestPalidromic(s) {
    let i = 0;
    let j = s.length - 1;
    let longest = 0;
    let longestStr = '';

    while(i <= s.length - 1) {
        if(i === j) {
            i++;
            j = s.length - 1;
        }
        if(s[i] === s[j]) {
            let str = s.slice(i,j+1);
            if(isPalindromic(str)){
                longestStr = str.length > longestStr.length ? str : longestStr;
                longest = str.length > longest ? str.length : longest;
                // console.log('longestStr',longestStr);
                // console.log(str);
                i++;
                j = s.length;
            }
        }
        j--;
    }



    function isPalindromic(str) {
        // let reverse = Array.from(str).reverse().join('');
        // if(reverse === str) {
        //     return true;
        // }else {
        //     return false;
        // }


        let i = 0;
        let j = str.length - 1;
        let isSame = true;
        let check = true;

        while(check) {
            if(str[i] !== str[j]){
                check = false;
                isSame = false;
            }
            if(i === j || i > j) {
                check = false;
            }
            i++;
            j--;
        }  
        
        return isSame;
    }


    return longest === 0 ? s : longestStr;
}
console.log(longestPalidromic(s));
