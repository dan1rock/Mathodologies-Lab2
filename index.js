/* eslint-disable max-len */
'use strict';

const { SinglyLinkedList } = require('./src/singlyLinkedList.js');
const { List } = require('./src/list.js');

const list1 = new SinglyLinkedList();

list1.append('a');
list1.append('b');
list1.append('c');
console.log('list1:', list1.get(0), list1.get(1), list1.get(2));
console.log('list1 length:', list1.length());

list1.insert('d', 1);
console.log('inserted element at index 1:', list1.get(1));
console.log('list1:', list1.get(0), list1.get(1), list1.get(2), list1.get(3));
console.log('list1 length:', list1.length());

console.log('deleted element at index 2:', list1.delete(2));
console.log('list1:', list1.get(0), list1.get(1), list1.get(2));
console.log('list1 length:', list1.length());

list1.append('a');
list1.append('a');

console.log('added 2 "a" to list1:', list1.get(0), list1.get(1), list1.get(2), list1.get(3), list1.get(4));
list1.deleteAll('a');
console.log('deleted all "a":', list1.get(0), list1.get(1));

const list2 = list1.clone();
console.log('clonned list1 into list2:', list2.get(0), list2.get(1));

list2.append('f');
console.log('appended "f" to list2:', list2.get(0), list2.get(1), list2.get(2));

list2.reverse();
console.log('reversed list2:', list2.get(0), list2.get(1), list2.get(2));
console.log('list1 has no changes:', list1.get(0), list1.get(1));

list1.extend(list2);
console.log('extended list1 by list2:', list1.get(0), list1.get(1), list1.get(2), list1.get(3), list1.get(4));

const list3 = new List();
list3.append('a');
list3.append('a');
list3.append('b');
list3.append('a');
console.log('list3 with second implementation', list1.get(0), list1.get(1), list1.get(2), list1.get(3));
console.log('index of first "a":', list3.findFirst('a'));
console.log('index of last "a":', list3.findLast('a'));

list3.deleteAll('a');
console.log('list3 after calling deleteAll("a"):', list3.get(0));

list3.clear();
console.log('list3 length after clearing:', list3.length());
