/* eslint-disable max-len */
'use strict';

const { SinglyLinkedList } = require('./src/singlyLinkedList.js');

const list = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

console.log(list.length());
list.append('a');
list.append('a');
list.append('a');
list.deleteAll('a');
console.log(list.length());
//console.log(list.get(1));
list2.append('d');
list2.append('k');
list2.append('o');
list2.append('2');
list2.append('3');
list2.extend(list);
console.log(list2.get(2));
console.log(list.length());
console.log(list2.length());
console.log(`${list2.get(0)}, ${list2.get(1)}, ${list2.get(2)}, ${list2.get(3)}, ${list2.get(4)}`);
list2.reverse();
console.log(list2.length());
console.log(`${list2.get(0)}, ${list2.get(1)}, ${list2.get(2)}, ${list2.get(3)}, ${list2.get(4)}`);
list2.clear();
console.log(list2.length());
