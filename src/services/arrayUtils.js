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
