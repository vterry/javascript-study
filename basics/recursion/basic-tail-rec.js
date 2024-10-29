// Tail recursion

function sampleRec(n) {
  if (n > 0) {
    console.log(n);
    sampleRec(n - 1);
  }
}

let x = 3;
sampleRec(3);

// Fibonacci Tail Solution

function tailRecFib(n, previous = 0, current = 1) {
  if (n == 0) return previous;
  if (n == 1) return current;

  // console.log("index is " + n);
  // console.log("current value is " + current);
  // console.log("previous is " + previous);

  return tailRecFib(n - 1, current, previous + current);
}

console.log(tailRecFib(50, 0, 1));
