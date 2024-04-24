export function chunk(arr, chunkSize) {
  let result = Array();
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export const sortObjectsByAlphabeticalKey = (arr = [], key) => {
  arr.sort((a, b) => {
    const labelA = a[key].toLowerCase();
    const labelB = b[key].toLowerCase();
    return labelA.localeCompare(labelB);
  });
  return arr;
};

const moveItemsToFront = (arr, condition) => {
  const frontItems = [];
  const otherItems = [];

  // Separiamo gli elementi che soddisfano la condizione da quelli che non la soddisfano
  arr.forEach((item) => {
    if (condition(item)) {
      frontItems.push(item);
    } else {
      otherItems.push(item);
    }
  });

  // Concateniamo gli elementi che soddisfano la condizione con quelli che non la soddisfano
  return frontItems.concat(otherItems);
};

Array.prototype.moveItemsToFront = function (condition) {
  return moveItemsToFront(this, condition);
};
