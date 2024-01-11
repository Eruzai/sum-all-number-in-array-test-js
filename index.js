function sumItems(array) {
  if (array.length == 1 && !Array.isArray(array)) {
    return array[0];
  }

  let sum = 0;

  array.forEach((num) => {
    if (Array.isArray(num)) {
      sum += sumItems(num);
    } else {
    sum += num;
    }
  });

  return sum;
};

module.exports = sumItems;