function a(n) {
  if (n > 100) {
    return n - 10;
  }
  return a(a(n + 11));
}

console.log(a(200));
