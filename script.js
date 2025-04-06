//your JS code here. If required.
const secondHighest = (arr) => {
  if (!arr || arr.length <= 1) {
    return -Infinity;
  }

  const uniqueElements = [...new Set(arr)];

  if (uniqueElements.length <= 1) {
    return -Infinity;
  }

  uniqueElements.sort((a, b) => b - a); // Sort in descending order

  return uniqueElements[1];
};
