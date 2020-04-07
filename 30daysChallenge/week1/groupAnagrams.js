// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.







// Answer
//只要把字串重新sort一遍，看有沒有一樣的就行了
//有一樣的就放到同個陣列裡面
//沒有一樣的就創一個新的
//resultObj {
// 0 : {resultAry:[]}
// key : {resultAry}
// }
function groupAnagrams(strs) {
    let resultObj = {
        0: { resultAry: [] }
    }
    let result = []
    strs.forEach(str => {
        check(str, resultObj)
    })

    Object.keys(resultObj).forEach(key => {
        resultObj[key]['resultAry'].length !== 0 ? result.push(resultObj[key]['resultAry']) : ''
    })



    //判斷主體
    function check(str, resultObj) {
        if (!str) {
            resultObj[0]['resultAry'].push(str)
            return
        }
        let sortStr = str.split('').sort().toString()
        let resultObjKeys = Object.keys(resultObj)

        resultObjKeys.some(key => key === sortStr) ? (() => {
            resultObj[sortStr]['resultAry'].push(str)
        })() : (() => {
            resultObj[sortStr] = {
                resultAry : [str]
            }
        })()
    }
    return result.toString() ? result : [['']]
}
console.log(groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"]))
















// function groupAnagrams(strs) {
//     let resultObj = {
//         0 : {ary:[]}
//     }
//     let result = []
//     strs.forEach(str => {
//         check(str,resultObj)
//     })


//     Object.keys(resultObj).forEach(key => {
//         resultObj[key]['ary'].length !== 0 ? result.push(resultObj[key]['ary']) : ''
//     })
//     console.log(result)

//     function check(str,resultObj) {
//         if(!str) {
//             resultObj[0]['ary'].push(str)
//             return
//         }
//         console.log(str)
//         let chars = str.split('')
//         let same = false
//         let sameKey = ''
//         let count = 1
//         let objs = Object.keys(resultObj).map(key => resultObj[key])
//         while(!same && count < objs.length) {
//             let issameOne = []
//             let issameTwo = []
//             chars.forEach(char => {
//                 issameOne.push(objs[count]['ck'].some(s => s === char))
//             })
//             objs[count]['ck'].forEach(s => {
//                 issameTwo.push(chars.some(char => char === s))
//             })

//             issameOne.every(ele => ele === true) && issameTwo.every(ele => ele === true)  ? (() => {
//                 same = true
//                 sameKey = objs[count]['ary'][0]
//             })() : ''
//             count++

//         }
//         if(same && sameKey.length === str.length) {
//             // console.log('is same')
//             resultObj[sameKey]['ary'].push(str)
//             sameKey = ''
//         }else {
//             // console.log('add new obj')
//             resultObj[str] = {
//                 ck : chars.map(char => char),
//                 ary : [str]
//             }
//         }
//     }
//     return result.toString() ? result : [['']] 
// }
// console.log(groupAnagrams(["tea","and","ace","ad","eat","dans"]))



function groupAnagrams(strs) {
    let resultObj = {
        0: { resultAry: [] }
    }
    let result = []
    strs.forEach(str => {
        check(str, resultObj)
    })

    Object.keys(resultObj).forEach(key => {
        resultObj[key]['resultAry'].length !== 0 ? result.push(resultObj[key]['resultAry']) : ''
    })



    //判斷主體
    function check(str, resultObj) {
        if (!str) {
            resultObj[0]['resultAry'].push(str)
            return
        }
        let strObj = str.split('').reduce((obj, s) => {
            // obj.hasOwnProperty(s) ? obj[s]++ : obj[s] = 1
            obj[s] ? obj[s]++ : obj[s] = 1
            return obj
        }, {})
        let objs = Object.keys(resultObj).map(key => resultObj[key])
        // console.log(objs)
        let issame = false
        let sameKey = ''
        let count = 1
        while (!issame && count < objs.length) {
            // console.log('enter loop')
            // console.log('objs[count]',objs[count])

            let strKey = Object.keys(strObj)
            let resultKey = Object.keys(objs[count]['checkStrs'])
            let keySame = strKey.sort().toString() === resultKey.sort().toString()
            let charCountSame = false
            // console.log('keySame',keySame)
            if (keySame) {
                charCountSame = strKey.reduce((countSame, key) => {
                    countSame = strObj[key] === objs[count]['checkStrs'][key] ? true : false
                    return countSame
                }, false)
            }
            issame = charCountSame ? (() => {
                sameKey = objs[count]['resultAry'][0]
                return true
            })() : false

            count++
        }

        if (issame) {
            console.log('is same')
            resultObj[sameKey]['resultAry'].push(str)
            sameKey = ''
            issame = false
        } else {
            console.log('add new obj')
            resultObj[str] = {
                checkStrs: strObj,
                resultAry: [str]
            }
        }
    }


    // console.log(resultObj)
    return result.toString() ? result : [['']]
}
console.log(groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"]))











