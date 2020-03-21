;(function() {
    let num = 1990;
    let roman = 'LVIII';
    function integerToRoman(number) {
        const romanNumber = {
            1 : 'I',
            5 : 'V',
            10 : 'X',
            50 : 'L',
            100 : 'C',
            500 : 'D',
            1000 : 'M',
        }
        let roman = [];
        let numLength = 0;
        let i = 1;
        let num = [];
        while(parseInt(number / i) > 0) {
            numLength++;
            i = i * 10;
        }

        for(let i = numLength - 1;i >= 0;i--) {
            num.push(parseInt(number / Math.pow(10,i)) * Math.pow(10,i));
            number = number % Math.pow(10,i);
        }

        roman = num.reduce((romanary,number,index) => {
            console.log(number);
            if(number === 0){return romanary;}
            if(number / Math.pow(10,num.length - index - 1) >= 5) {
                console.log('number > 5*');
                if(number / Math.pow(10,num.length - index - 1) === 9) {
                    console.log('=== 9')
                    romanary.push(romanNumber[Math.pow(10,num.length - index - 1)]);
                    romanary.push(romanNumber[Math.pow(10,num.length - index)]);
                }else {
                    romanary.push(romanNumber[5 * Math.pow(10,num.length - index - 1)]);
                    number = number - 5 * Math.pow(10,num.length - index -1);

                    for(let i = number / Math.pow(10,num.length - index - 1);i > 0;i--){
                        console.log('for loop')
                        romanary.push(romanNumber[Math.pow(10,num.length - index - 1)])
                    }
                }

            }else {
                console.log('number < 5*')
                if(number / Math.pow(10,num.length - index -1) === 4) {
                    console.log('===4')
                    romanary.push(romanNumber[Math.pow(10,num.length - index - 1)]);
                    romanary.push(romanNumber[5 * Math.pow(10,num.length - index - 1)]);
                }else {
                    for(let i = number / Math.pow(10,num.length - index - 1);i > 0;i--){
                        romanary.push(romanNumber[Math.pow(10,num.length - index - 1)])
                    }
                }
            }
            return romanary;
        },[])
        return roman.join('');
    }

    // console.log(integerToRoman(num));

    
    
    function romainToInteger(romannum) {
        if(typeof romannum !== 'string') {return;}
        const romantonum = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
        const roman = romannum.split('');
        let value = 0;

        for(let i = 0;i < roman.length;i++) {
            if(romantonum[roman[i]] > romantonum[roman[i - 1]]) {
                console.log(roman[i],'big');
                value += (romantonum[roman[i]] - romantonum[roman[i - 1]] * 2);
            }else {
                console.log(roman[i]);
                value += romantonum[roman[i]];
                console.log(value);
            }
        }
        return value;
    }
   
    romainToInteger(roman);
})();