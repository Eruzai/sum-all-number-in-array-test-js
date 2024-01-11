function sumItems(array) {
  let sum = 0;

  array.forEach((num) => {
    if (Array.isArray(num)) {
      sum += sumItems(num);
    } else {
      sum += num;
    }
  });

  return sum;
}

module.exports = sumItems;