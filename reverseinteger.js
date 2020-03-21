;(function () {
    let num = -120;

    // function reverseInteger(num) {
    //     let numary = num.toString().split('');
    //     let check = false;
    //     if(numary[0] === '-') {
    //         numary.shift();
    //         check = true;
    //     }
    //     return check ? 0 - Number(numary.reverse().join('')) : Number(numary.reverse().join(''));
    // }
    
    //超過2的31次方或是小於2的負31次方
    //就return 0;
    function reverseInteger(num) {
        let r = parseInt(num.toString().split('').reverse().join(''));
        if(r > 2147483647 || r < -2147483647){return 0};
        return (num < 0) ? -r : r;
    }


    console.log(reverseInteger(num));
})()