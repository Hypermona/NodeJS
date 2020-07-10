var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Entered Length and breadth is " + l + " and " + b);
  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimensions should be greater than zero:  l = " +
        l +
        ",  and b = " +
        b
    );
  } else {
    console.log("perimeter is", rect.perimeter(l, b));
    console.log("Area is ", rect.area(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
