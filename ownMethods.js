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

function biggerThen3(item) {
  return item > 3;
}

console.log(myArr.myFilter(biggerThen3()));
console.log(myArr.filter((x) => biggerThen3(x)));

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
