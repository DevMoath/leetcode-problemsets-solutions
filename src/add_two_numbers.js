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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {boolean}
 */
const isEquals = (l1, l2) => {
    let pointerL1 = l1;
    let pointerL2 = l2;
    
    while (pointerL1 || pointerL2) {
        let value1 = pointerL1 ? pointerL1.val : 0;
        let value2 = pointerL2 ? pointerL2.val : 0;
        
        if (value1 !== value2) {
            return false;
        }
        
        pointerL1 = pointerL1.next;
        pointerL2 = pointerL2.next;
    }
    
    return true;
};

// Test cases
let l1       = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2       = new ListNode(5, new ListNode(6, new ListNode(4)));
let expected = new ListNode(7, new ListNode(0, new ListNode(8)));

console.log(isEquals(addTwoNumbers(l1, l2), expected) === true);
