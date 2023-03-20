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
    if (!isChar(element) || !validateIndex(index)) {
      return;
    }
    const node = new SinglyLinkedListNode(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.tail = node;
    } else if (index === this.size) {
      this.tail.next = node;
      this.tail = node;
      node.next = this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }

  delete(index) {
    if (!validateIndex(index)) {
      return;
    }
    let deletedItem = null;
    if (this.size === 1) {
      deletedItem = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedItem = this.head.data;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      deletedItem = current.next.data;
      current.next = current.next.next;
      if (index === this.length - 1) this.tail = current;
    }
    return deletedItem;
  }

  deleteAll(element) {
    let current = this.head;
    let prev = this.tail;
    let i = 0;
    while (i < this.length) {
      if (current.data === element) {
        if (i === 0) {
          this.head = this.head.next;
          this.tail.next = this.head;
          prev = this.tail;
        } else {
          prev.next = current.next;
          if (i === this.length - 1) this.tail = prev;
        }
        this.size--;
        i--;
      } else {
        prev = current;
      }
      current = current.next;
      i++;
    }
  }

  get(index) {
    if (!validateIndex(index)) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    return current.data;
  }

  clone() {
    const newList = new SinglyLinkedList();
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      newList.append(current.data);
      current = current.next;
    }
    return newList;
  }

  reverse() {
    let current = this.head;
    let prev = this.tail;
    for (let i = 0; i < this.length; i++) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    if (this.length > 0) this.tail = this.head.next;
  }

  findFirst(element) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.data === element) return i;
      current = current.next;
    }
    return -1;
  }

  findLast(element) {
    let current = this.head;
    let lastIndex = -1;
    for (let i = 0; i < this.length; i++) {
      if (current.data === element) lastIndex = i;
      current = current.next;
    }
    return lastIndex;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(elements) {
    let current = elements.head;
    for (let i = 0; i < elements.length; i++) {
      this.append(current.data);
      current = current.next;
    }
  }
}

module.exports = { SinglyLinkedList };
