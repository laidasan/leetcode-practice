let nums = [1,0,-1,0,-2,2]
// let nums = [0,-1,0,2,-2]
let target = 0;

//需要排序 因為result不能重複
//或用找到後先排序result在放到物件裡面

function fourSum(nums,target) {
    let length = nums.length
    nums.sort()
    let result = {}
    let [a,b,c,d] = [0,1,length - 2,length - 1]
    console.log(a,b,c,d)
    while(a < length - 3) {
        while(d > a + 2) {
            let sum = nums[a] + nums[b] + nums[c] + nums[d]
            sum === target ? result[`${nums[a]}${nums[b]}${nums[c]}${nums[d]}`] = [nums[a],nums[b],nums[c],nums[d]] : ''
            // console.log('push')
            // result.push([nums[a],nums[b],nums[c],nums[d]])
            // sum === target ? result.push([nums[a],nums[b],nums[c],nums[d]]) : ''
            c--
            if(c <= b) {
                // console.log('b++')
                c = d - 1
                b++
                if(b >= c) {
                    // console.log('d--')
                    d--
                    //problem: d--後就跳出迴圈，沒有在push了
                    b = a + 1
                    c = d - 1
                }
            }
        }
        // console.log('a++')
        a++;
        b = a + 1
        d = length - 1
        c = d - 1
    }
    
    return Object.keys(result).map(key => result[key])
}

let result = (fourSum(nums,target))
console.log(result)
// console.log(result.length)
// console.log(fourSum(nums,target))