const removeFromArray = function(list) {
  let newList = [];
  let args = [...arguments];
  let isTarget;
  for (let x = 0; x < list.length; x++) {
    isTarget = false;
    for (y of args) {
      if (list[x] === y) {
        isTarget = true;
      }
    }
    if (!isTarget) {
      newList.push(list[x]);
    }
  }
  return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
