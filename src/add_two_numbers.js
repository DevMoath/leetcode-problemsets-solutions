/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val  = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param carry
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, carry = null) => {
    let node = null;
    
    if (l1 || l2) {
        const result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry ? 1 : 0);
        
        node = new ListNode(result % 10);
        
        node.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, result >= 10);
    } else if (carry) {
        node = new ListNode(1);
    }
    
    return node;
};

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
