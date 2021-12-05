function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
  return a === c && b === d && c === d && a == d;
};

Square.prototype.isSquare(4, 3, 4, 1); // false

console.log(Square.prototype.isSquare(4, 4, 4, 4)); // true
