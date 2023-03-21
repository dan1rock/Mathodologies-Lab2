'use strict';

const { SinglyLinkedListNode } = require('./singlyLinkedListNode.js');
const { validateElement, validateIndex } = require('./validations');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    if (this.head === null && this.tail === null) {
      return 0;
    }
    let count = 1;
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  append(element) {
    validateElement(element);
    const newNode = new SinglyLinkedListNode(element);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
  }

  insert(element, index) {
    validateElement(element);
    validateIndex(index, this.length());
    const newNode = new SinglyLinkedListNode(element);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
    } else if (index === this.size) {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  delete(index) {
    validateIndex(index, this.length());
    let deletedItem = null;
    if (this.length() === 1) {
      deletedItem = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedItem = this.head.value;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      deletedItem = node.next.value;
      if (index === this.length - 1) this.tail = node;
      node.next = node.next.next;
    }
    return deletedItem;
  }

  deleteAll(element) {
    let node = this.head;
    let prevNode = this.tail;
    let i = 0;
    while (i < this.length()) {
      if (node.value === element) {
        if (i === 0) {
          this.head = this.head.next;
          this.tail.next = this.head;
          prevNode = this.tail;
        } else {
          prevNode.next = node.next;
          if (i === this.length() - 1) this.tail = prevNode;
        }
        i--;
      } else {
        prevNode = node;
      }
      node = node.next;
      i++;
    }
  }

  get(index) {
    validateIndex(index, this.length());
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.value;
  }

  clone() {
    const newList = new SinglyLinkedList();
    let node = this.head;
    for (let i = 0; i < this.length(); i++) {
      newList.append(node.value);
      node = node.next;
    }
    return newList;
  }

  reverse() {
    let current = this.head;
    let prev = this.tail;
    let i = 0;
    while (i < this.size) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
    this.head = prev;
    if (this.size > 0) this.tail = this.head.next;
  }

  findFirst(element) {
    let node = this.head;
    for (let i = 0; i < this.length(); i++) {
      if (node.value === element) return i;
      node = node.next;
    }
    return -1;
  }

  findLast(element) {
    let node = this.head;
    let lastIndex = -1;
    for (let i = 0; i < this.length(); i++) {
      if (node.value === element) lastIndex = i;
      node = node.next;
    }
    return lastIndex;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(elements) {
    let node = elements.head;
    for (let i = 0; i < elements.length(); i++) {
      this.append(node.value);
      node = node.next;
    }
  }
}

module.exports = { SinglyLinkedList };
