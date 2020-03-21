;(function() {
    let num = 10;
    function palindromicNumber(num) {
        let abs = num < 0 ? true : false;
        let nm = Math.abs(num);
        let numary = [];
        let length = 1;
        let i = 10;
        let reverseNum = 0;
        while(Math.floor(nm / i) !== 0) {
            length++;
            i = i * 10;
        }
        for(j = length - 1;j >= 0;j--) {
            numary.push(Math.floor(nm / Math.pow(10,j)));
            nm = nm % Math.pow(10,j);
        }
        // console.log(length);
        // console.log(numary);
        reverseNum = numary.reverse()
                    .reduce((newNum,item,index) => {
                        newNum += item * Math.pow(10,numary.length - 1 - index)
                        return newNum;
                    },0);
        // console.log(reverseNum);
        return abs ? false : num === reverseNum;
    }
    console.log(palindromicNumber(num));

})();