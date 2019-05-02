// functions can be defined inside expressions.
const a = function(x, y) {
  return x + y;
};
console.log(a(3, 2));

// they can also be declared.
function aa(x, y) {
  return x + y;
}
console.log(a(5, 2));
