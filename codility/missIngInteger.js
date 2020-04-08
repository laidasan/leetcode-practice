// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let F = []
    let i = 0, v = 0
    
    while(i < A.length) {
        v = A[i]
        i++
        if(F[v]) continue;
        F[v] = true
    }
    
    i = 1
    while(F[i]) {
        i++
    }
    return i 
}

// wrong answer
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallest = 1
    let count = 0
    let isfind = false
    A.sort()
    while (count < A.length && !isfind) {
        if (A[count] >= 0) {
            isfind = A[count + 1] === A[count] || A[count + 1] === A[count] + 1 ? false : true
            isfind ? smallest = A[count] + 1 : ''
        }
        count++
    }
    return smallest
}




// answer
function solution(A) {
    var F = []; // Found list
    var I = 0, V = 0; // Counter, container
      
    while (I < A.length) { // Iterate through the array
      V = A[I]; // Store the value
      I++; // Increase counter
      if (F[V]) continue; // If the value exists, continue
      F[V] = true; // Store the value
    }
      
    I = 0;
      
    do { // Look for the first value that doesn't appear
      I++;
    } while (F[I]) // We do this by looping through the array until falsy
      
    return I; // Return the number of times we iterated 
  }