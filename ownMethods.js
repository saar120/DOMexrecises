const myArr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myFilter = function (callback) {
  const filteredArr = [];
  this.forEach((item) => {
    if (callback(item)) {
      filteredArr.push(item);
    }
  });
  return filteredArr;
};

const newArrFilter = myArr.myFilter(function (item) {
  return item > 3;
});

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};

const newArrFind = myArr.myFind(function (item) {
  return item > 3;
});
