/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    let merged = mergeTwoLists(list1.next, list2);
    list1.next = merged;
    return list1;
  } else {
    let merged = mergeTwoLists(list1, list2.next);
    list2.next = merged;
    return list2;
  }
}
