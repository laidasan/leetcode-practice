// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function vmergeTwoLists(l1, l2) {
    let mergeList = new ListNode(0)
    let head = mergeList
    while(l1 && l2) {
        if(l1.val > l2.val) {
            head.next = l2
            l2 = l2.next
        }else {
            head.next = l1
            l1 = l1.next
        }
        head = head.next
    }

    l1 ? head.next = l1 : head.next = l2

    console.log(mergeList)
    return mergeList.next
};
