// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.


// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

let s = '()'

function isValid(s) {
    let i = 0;
    let iswrong = false
    let closeShuld = []
    let a = 0,b = 0,c = 0
    while(i < s.length && !iswrong) {
        if( (a === 0 && s[i] === ')') || (b === 0 && s[i] === ']') || (c === 0 && s[i] === '}')) {iswrong = true}
        switch (s[i]) {
            case '(':
                closeShuld.push(')')
                a++
                break;
            case '[':
                closeShuld.push(']')
                b++;
                break;
            case '{':
                closeShuld.push('}')
                c++;
                break;
            case ')':
                // console.log(')')
                iswrong = closeShuld.pop() === ')' ? false : true
                // console.log(iswrong)
                a--
                break;
            case ']':
                iswrong = closeShuld.pop() === ']' ? false : true
                b--
                break
            case '}':
                iswrong = closeShuld.pop() === '}' ? false : true
                c--
                break;
        }
        i++
    }
    // console.log(iswrong)
    // console.log(a,b,c)
    return !iswrong && (a + b + c) === 0 ? true : false
}

console.log(isValid('(())'))

