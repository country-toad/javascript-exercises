const removeFromArray = function(list) {
  let args = Array.from(arguments);
  for (i = 0; i < list.length; i++) {
    let isTarget = false;
    for (target of args) { // Marks target item for deletion
      if (list[i] === target) {
        isTarget = true;
      }
    }
    if (isTarget) {
      list.splice(i, 1); // Deletes item at current index
    }
  }
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;
