;(function () {
    let str = 'words -987'

    function stringtoInt(str) {
        //處理數字不再前面位置
        // let ary = str.trim().split(' ');
        // let result = 0;
        // let isfind = false;
        // let arrow = 0;
        // while(!isfind && arrow < ary.length) {
        //     result = parseInt(ary[arrow]);
        //     if(result === result){isfind = true};
        //     arrow++; 
        // }
        // return isfind === true ? (result > 0) ? ((result > 2147483648) ? 2147483648 : result) : ((result < -2147483648) ? -2147483648 : result) : 'noNum';
        

        //不處理數字在後面
        let result = parseInt(str.trim());
        return result === result ? (result > 0) ? ((result > 2147483648) ? 2147483647 : result) : ((result < -2147483648) ? -2147483648 : result) : 0;


        // if(result > 0 && result >= 2147483648){
        //     return 2147483648;
        // }else if(result < 0 && result <= -2147483648) {
        //     return -2147483648;
        // }else {
        //     return result;
        // }
    }

    console.log(stringtoInt(str));
})()