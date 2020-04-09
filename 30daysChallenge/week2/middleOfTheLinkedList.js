// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Note:

// The number of nodes in the given list will be between 1 and 100.

// 給一個 LinkedList 找出LinkedList中間值，如果中間值有兩個，return 第二個

// 解
// ● 要知道LinkList的長度


function middleNode(head) {
    let length = 0
    let move = 0
    let countList = head
    let middleNode = head
    
    while(countList) {
        length++
        countList = countList.next
    }

    move = length % 2 === 0 ? length / 2 : Math.floor(length / 2)

    while(move > 0) {
        middleNode = middleNode.next
        move--
    }

    return middleNode
}
