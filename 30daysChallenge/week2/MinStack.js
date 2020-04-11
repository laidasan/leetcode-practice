
/**
 * initialize your data structure here.
 */
// var MinStack = function() {
    // this.ary = []
// };
function MinStack() {
    this.ary = []
}


/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.ary.push(x)
    return this.push
};
let stack = new MinStack()
console.log(stack.pop)

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.ary.pop()
    return this.pop
};



/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.ary[this.ary.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.ary.reduce( (nm,next) => {
        return nm > next ? next : nm
    })
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 let obj = new MinStack()
 obj.push(0)
 obj.push(1)
 obj.push(2)
 obj.pop()
 let topNum = obj.top()
 let minNum = obj.getMin()
 console.log(topNum)
 console.log(minNum)


