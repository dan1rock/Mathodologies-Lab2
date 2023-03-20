'use strict';

const { SinglyLinkedListNode } = require('./singlyLinkedListNode.js');
const { isChar, validateIndex } = require('./validations');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    if (this.head === null && this.tail === null) {
      return 0;
    }
    let count = 0;
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  append(element) {
    if (!isChar(element)) {
      return;
    }
    const newNode = new SinglyLinkedListNode(element);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insert(element, index) {
    if (!isChar(element) || !validateIndex) {
      return;
    }
    const node = new SinglyLinkedListNode(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else if (index === this.length() - 1) {
      this.tail.next = node;
      node.next = this.tail;
    } else {
      let counter = 0;
      let nodeToMove = this.head;
      while (counter !== index) {
        nodeToMove = nodeToMove.next();
        counter++;
      }
      node.prev = nodeToMove.prev;
      nodeToMove.prev.next = node;
      node.next = nodeToMove;
      nodeToMove.prev = node;
    }
  }
}
