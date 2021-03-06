'use strict';

module.exports = function (iterator) {
  var nextItem;
  var results = [];

  nextItem = iterator.next();
  while (!nextItem.done) {
    results.push(nextItem.value);
    nextItem = iterator.next();
  }

  return results;
};
