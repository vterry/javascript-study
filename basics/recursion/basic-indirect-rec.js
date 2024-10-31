function a(n) {
  if (n > 0) {
    console.log("return from a: " + n);
    b(n - 1);
  }
}

function b(n) {
  if (n > 1) {
    console.log("return from b: " + n);
    a(n / 2);
  }
}

a(20);
