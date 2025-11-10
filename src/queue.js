const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}
class Queue {
  constructor(){
    this.first = null;
    this.rear = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newVal = new ListNode(value);
    if (!this.first) {
      this.first = newVal;
      this.rear = newVal;
    } else {
      this.rear.next = newVal;
      this.rear = newVal;
    }
  }

  dequeue() {
    if (!this. first) return 1;
    this.first = this.first.next;
    if (this.first == null) {
      this.rear = null;
    }
    return 1
  }
}

module.exports = {
  Queue
};
