/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';
const { SinglyLinkedList } = require('../src/singlyLinkedList');

test('Empty list length must be 0', () => {
  const list = new SinglyLinkedList();
  expect(list.length()).toBe(0);
});

test('After adding two elements, list length must be 2', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  expect(list.length()).toBe(2);
});

test('After appending elements we can get them by indices', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  expect(list.get(0)).toBe('a');
  expect(list.get(1)).toBe('b');
});

test('After inserting an element by index, we can find it by this index', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.append('e');
  list.insert('f', 4);
  expect(list.get(4)).toBe('f');
});

test('After deleting an element from a list with 1 element, the list must be empty', () => {
  const list = new SinglyLinkedList();
  list.append('b');
  list.delete(0);
  expect(list.length()).toBe(0);
});

test('After deleting an element from a list with 2 elements, the list has 1 element', () => {
  const list = new SinglyLinkedList();
  list.append('b');
  list.append('c');
  list.delete(1);
  expect(list.length()).toBe(1);
});

test('After deleting an element by index its value must be returned', () => {
  const list = new SinglyLinkedList();
  list.append('b');
  list.append('c');
  expect(list.delete(1)).toBe('c');
});

test('After deleting all elements by same value in list with same elements, list must be empty', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('a');
  list.append('a');
  list.deleteAll('a');
  expect(list.length()).toBe(0);
});

test('After deleting all elements by value that does not exist in list, nothing changes', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('a');
  list.append('a');
  list.deleteAll('b');
  expect(list.length()).toBe(3);
});

test('Cloned list must be the same as original list', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  const clone = list.clone();
  expect(clone.length()).toBe(list.length());
  expect(clone.get(0)).toBe(list.get(0));
  expect(clone.get(1)).toBe(list.get(1));
  expect(clone.get(2)).toBe(list.get(2));
  expect(clone.get(3)).toBe(list.get(3));
});

test('After reversing a list, list reversed properly', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.reverse();
  expect(list.get(0)).toBe('b');
  expect(list.get(1)).toBe('a');
});

test('After reversing a list twice, list remains the same', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.reverse();
  list.reverse();
  expect(list.get(0)).toBe('a');
  expect(list.get(1)).toBe('b');
});

test('Finding first element works properly', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('b');
  list.append('b');
  expect(list.findFirst('b')).toBe(1);
});

test('Finding first element works properly', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('b');
  list.append('b');
  expect(list.findLast('b')).toBe(3);
});

test('If element not found method findFirst() returns -1', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  expect(list.findFirst('d')).toBe(-1);
});

test('If element not found method findLast() returns -1', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  expect(list.findLast('d')).toBe(-1);
});

test('Using findFirst() with empty list returns -1', () => {
  const list = new SinglyLinkedList();
  expect(list.findFirst('a')).toBe(-1);
});

test('Using findLast() with empty list returns -1', () => {
  const list = new SinglyLinkedList();
  expect(list.findLast('a')).toBe(-1);
});

test('After clearing the list with clear() length must be 0', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.clear();
  expect(list.length()).toBe(0);
});

test('WMethod extend() works properly', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  const list2 = new SinglyLinkedList();
  list2.append('b');
  list2.append('c');
  list.extend(list2);
  expect(list.length()).toBe(4);
  expect(list.get(0)).toBe('a');
  expect(list.get(1)).toBe('b');
  expect(list.get(2)).toBe('b');
  expect(list.get(3)).toBe('c');
});

test('Changing extended list does not affect list used to extend', () => {
  const list = new SinglyLinkedList();
  list.append('a');
  list.append('b');
  const list2 = new SinglyLinkedList();
  list2.append('b');
  list2.append('c');
  list.extend(list2);
  list.delete(1);
  expect(list2.length()).toBe(2);
  expect(list2.get(1)).toBe('c');
});

test('Index validation works properly', () => {
  const list = new SinglyLinkedList();
  list.append('1');
  expect(list.get.bind(list, -1)).toThrow('Index out of range');
  expect(list.get.bind(list, 5)).toThrow('Index out of range');
  expect(list.get.bind(list, '0')).toThrow('Index must be a number');

  expect(list.delete.bind(list, -1)).toThrow('Index out of range');
  expect(list.delete.bind(list, 5)).toThrow('Index out of range');
  expect(list.delete.bind(list, '0')).toThrow('Index must be a number');

  expect(list.insert.bind(list, 'a', -1)).toThrow('Index out of range');
  expect(list.insert.bind(list, 'a', 5)).toThrow('Index out of range');
  expect(list.insert.bind(list, 'a', '0')).toThrow('Index must be a number');
});

test('Element validation works properly', () => {
  const list = new SinglyLinkedList();
  expect(list.append.bind(list, 1)).toThrow('Element type must be char');
  expect(list.append.bind(list, '11')).toThrow('Element type must be char');

  expect(list.insert.bind(list, 1, 0)).toThrow('Element type must be char');
  expect(list.insert.bind(list, '11', 0)).toThrow('Element type must be char');

  expect(list.deleteAll.bind(list, 1)).toThrow('Element type must be char');
  expect(list.deleteAll.bind(list, '11')).toThrow('Element type must be char');

  expect(list.findFirst.bind(list, 1)).toThrow('Element type must be char');
  expect(list.findFirst.bind(list, '11')).toThrow('Element type must be char');

  expect(list.findLast.bind(list, 1)).toThrow('Element type must be char');
  expect(list.findLast.bind(list, '11')).toThrow('Element type must be char');
});
