// Head recursion

function sampleRec(n) {
  if (n > 0) {
    sampleRec(n - 1);
    console.log(n);
  }
}

let x = 3;
sampleRec(3);

//Fibonacci - kind of head

function recFib(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return recFib(n - 1) + recFib(n - 2);
  }
}

console.log(recFib(50));
