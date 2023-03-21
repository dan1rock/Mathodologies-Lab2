'use strict';

const { SinglyLinkedListNode } = require('./singlyLinkedListNode.js');
const { validateElement, validateIndex } = require('./validations.js');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(element) {
    validateElement(element);
    const newNode = new SinglyLinkedListNode(element);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
    this.size++;
  }

  insert(element, index) {
    validateElement(element);
    validateIndex(index, this.size);
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
    this.size++;
  }

  delete(index) {
    validateIndex(index, this.size);
    let deletedItem = null;
    if (this.size === 1) {
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
      node.next = node.next.next;
      if (index === this.size) this.tail = node;
    }
    this.size--;
    return deletedItem;
  }

  deleteAll(element) {
    validateElement(element);
    if (this.head === this.tail) {
      return;
    }
    let nodeToDelete = this.head;
    for (let i = 0; i < this.size; i++) {
      if (nodeToDelete.value === element) {
        this.delete(i);
        i--;
      }
      nodeToDelete = nodeToDelete.next;
    }
  }

  get(index) {
    validateIndex(index, this.size);
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.value;
  }

  clone() {
    const newList = new SinglyLinkedList();
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      newList.append(node.value);
      node = node.next;
    }
    return newList;
  }

  reverse() {
    let node = this.head;
    let prevNode = this.tail;
    for (let i = 0; i < this.size; i++) {
      const next = node.next;
      node.next = prevNode;
      prevNode = node;
      node = next;
    }
    this.head = prevNode;
    if (this.size > 0) this.tail = this.head.next;
  }

  findFirst(element) {
    validateElement(element);
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      if (node.value === element) return i;
      node = node.next;
    }
    return -1;
  }

  findLast(element) {
    validateElement(element);
    let node = this.head;
    let lastIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (node.value === element) lastIndex = i;
      node = node.next;
    }
    return lastIndex;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(elements) {
    let node = elements.head;
    for (let i = 0; i < elements.size; i++) {
      this.append(node.value);
      node = node.next;
    }
  }
}

module.exports = { SinglyLinkedList };
