'use strict';

const validateElement = (element) => {
  if (typeof element !== 'string' || element.length !== 1) {
    throw new Error('Element type must be char');
  }
};

const validateIndex = (index, length) => {
  if (typeof index === 'number') {
    throw new Error('Index must be a number');
  }
  if (index < 0 || index >= length) {
    throw new Error('Index out of range');
  }
};

module.exports = { validateElement, validateIndex };
