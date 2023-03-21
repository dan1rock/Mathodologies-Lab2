# Methodologies-Lab2

__Custom linked list implementaion__

By Danylo Holets, KPI FICE, group IM-12

```
My variant = 1208 % 4 = 0
```
## Description

* First version of module implements a default circular linked list.

* Second version of module implements a linked list based on build-in arrays.

In both of versions there are implemented methods: 

- length - returns the count of elements in the list. If the list is empty, it returns zero;
- append - adds an element at the end of the list;
- insert - inserts an element in a certain position of the list. If index is less than 0 or larger than the list range, it will throw an error;
- delete - deletes an element in a certain position of the list and returns its value. If index is less than 0 or larger than the list range, it will throw an error;
- deleteAll - deletes all the elements in the list with a certain value. If there are no such elements, nothing changes in the list;
- get - returns an element of the list in a certain position. If index is less than 0 or larger than the list range, it will throw an error;
- clone - copies elements from the list and returns a copy of it;
- reverse - reverses the list;
- findFirst - finds the first element of the list with a certain value and returns its index. If there are no such elements, it returns -1;
- findLast - finds the last element of the list with a certain value and returns its index. If there are no such elements, it returns -1;
- clear - deletes the elements from the list;
- extend - adds to the list all the elements of elements list.

## How to use
The project requires node.js to be installed on your machine. I was working with 18.12.1 version.

Install all dependancies:
```bash
$ npm install
```

To run application:
```bash
$ node index.js
```

To run tests:
```bash
$ npm test
```
