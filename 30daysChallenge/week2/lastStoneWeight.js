// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

function lastStoneWeight(stones) {
    let x = [0,0] , y = [0,0]
    while(stones.length > 1) {
        y = stones.reduce((yStone,stone,index) => {
            if(yStone[0] < stone) {
                y[0] = stone
                y[1] = index
            }

            return yStone
        },y)
        
        x = stones.reduce((xStone,stone,index) => {
            if(xStone[0] < stone && index !== y[1]) {
                x[0] = stone
                x[1] = index
            }

            return xStone
        },x)
        
        stones.splice(stones.findIndex(ele => ele === x[0]), 1)
        stones.splice(stones.findIndex(ele => ele === y[0]) , 1)
        // console.log(x,y)
        // console.log(stones)

        let newStone = y[0] - x[0]
        newStone !== 0 ? stones.push(newStone) : ''
        
        x = [0,0]
        y = [0,0]
        
    }

    return stones.length >= 1 ? stones[0] : 0
}