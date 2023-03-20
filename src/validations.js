'use strict';

const isChar = (element) => {
  if (typeof element !== 'string' || element.length !== 1) {
    return false;
  }
  return true;
};

const validateIndex = (index, length) => {
  if (index < 0 || index >= length) {
    return false;
  }
  return true;
};

module.exports = { isChar, validateIndex };
