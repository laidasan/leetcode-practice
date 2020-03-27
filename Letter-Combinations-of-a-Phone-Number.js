const phoneABC = {
    2 : ['a','b','c'],
    3 : ['d','e','f'],
    4 : ['g','h','i'],
    5 : ['j','k','l'],
    6 : ['m','n','o'],
    7 : ['p','q','r','s'],
    8 : ['t','u','v'],
    9 : ['w','x','y','z']
}
let input = '234'
// let input = ''
// let input = '2'



function combinArray(ar1,ar2) {
    let i = 0,j = 0
    let combinary = []
    while (i < ar1.length) {
        combinary.push(ar1[i] + ar2[j])
        j++
        if(j >= ar2.length){
            j = 0
            i++;
        }
    }
    return combinary
}


function letterCombinations(digits) {
    if(digits === ''){return []} else if(digits.length === 1){return phoneABC[digits]}
    let possibleCombinations = []
    let inputs = Array.from(digits)
    let willBeCombined = inputs.map(input => phoneABC[input])
    possibleCombinations = willBeCombined.reduce((ary1,ary2) => combinArray(ary1,ary2)) 
    return possibleCombinations
};
console.log(letterCombinations(input))