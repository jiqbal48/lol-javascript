// functions can be defined inside expressions.
const a = function(x, y) {
  return x + y;
};
console.log(a(3, 2));

// they can also be declared.
function b(x, y) {
  return x + y;
}
console.log(b(5, 2));

// so classes are basically functions. and can be defined same way
// declaritive.
class Table {
  constructor(age) {
    this.name = "tableo";
    this.age = age;
  }
}
const mrT = new Table(30); // also note, the `new`. cant call classes off the cuff. classes return object.
console.log(mrT);
// um.. another comment. classes are not hoisted as functions are. u can't use a class
// before its defined.
