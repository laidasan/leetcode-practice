// solution(A,K)
// A是一個非降序，且最大值不超過K、最小值為1 的遞增 array
// 檢查 A 是否符合

//example
// A [1,2,3], K 3 => true
// A [1,1,2,3], K 3 => true
// A [1,1,3,2], K 3 => false

// 2020/4/8 的 test task4 ， 給了一段code，最多修改兩行來讓current 達成 100%
// test時沒有全隊 對了 50%
// 下面是在次更改過的(但沒有確定)

function solutioin(A,K) {
    for(let i = 0 ; i < A.length - 1;i++) {
        if(A[i] + 1 < A[i] + 1) return false
    }
    
    if(A[0] < 1 || A[A.length - 1] > K) {
        return false
    }else {
        return true
    }
}