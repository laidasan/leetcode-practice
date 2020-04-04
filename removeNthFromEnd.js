(() => {
    function ListNode(val) {
        this.val = val
        this.next = null
    }

    //haed
    //ListNode {
    //     val: 1
    //     next: {val: 2 ,next: {val .....}}
    // }

    //how to do
    // 1.To remove n-th node from the end, send node hare as far as n.
    // 2.Move node curr and hare in same speed until hare gets the last node.
    // 3.Since curr and hare has gap as n, curr has n+1-th node from the end when hare has 1th node from the end. So change curr.next to curr.next.next.

    //要做的事其實很簡單，題目意思是:假設現在有一個List為 1 -> 2 -> 3 -> 4 -> 5
    //給一個n，假設n = 2，就要將List從最後往前數的地二個ListNode刪除，所以就會變成 1 -> 2 -> 3 -> 5
    //所以只需要將第三個ListNode(這裡是3)的next改為5(也就是3.next.next)
    //所以步驟為:
    //1.找到欲刪除之ListNode前一個ListNode
    //2.將找到的ListNode.next 改成下下個,ListNode.next = Listnode.next.next\
    //再加上一些判斷，比如說n=0(一個都不刪除) or n = 第一個節點(只需要head = head.next)

    //如何找到欲刪除節點的前一個節點?
    //想像成陣列的話很簡單，只要將 (陣列長度 - n - 1) 所得到的就是刪除元素前一個的index值，從陣列開頭到刪除元素的前一個元素之長度的話就是 (陣列長度 - n)
    //但是這裡ListNodes沒有length屬性，不知道長度，而且刪除的點是由後往前算的
    //所以我們用兩個指標來做(這裡用A、B稱呼)，A先移動 n 次，B在第一個ListNode的位置，之後兩個開始同時移動，直到A指標移動到最後一個ListNode
    //A指標有先移動了，所以會比B指標更早到達最後一個ListNode，而A指標移動後的移動次數就剛好是  (陣列長度 - n)，B指標會指到欲刪除節點的前一個節點
    //爾後就將B指標的ListNode.next 改為 ListNode.next = ListNode.next.next
    function removeNthFromEnd(head,n) {
        let hare = head, curr = head
        //先移動A指標n次(n = 0 ， 別忘了 0 是false家族成員之一，所以會跳出迴圈)
        while (n--) {
            hare = hare.next
        }

        //A、B指標同時移動
        while (hare && hare.next) {
            curr = curr.next
            hare = hare.next
        }

        //如果A指標是null的話，就等於欲刪除第一個節點，只需要將head往前移動一個
        if (!hare) {
            head = head.next
        } else {
            //curr = head，所以修改curr.next時也等同是修改head.next(parse by share)
            curr.next = curr.next ? curr.next.next : null
        }
        return head
    }
})()