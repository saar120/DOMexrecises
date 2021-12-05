function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
  if (a === c && b === d) return true;
  return false;
};

Square.prototype.isSquare(4, 3, 4, 1); // false

Square.prototype.isSquare(4, 3, 4, 3); // true
