// sum  of n natural numbers

function sum(n) {
  if (n == 0) {
    return 0;
  }
  return sum(n - 1) + n;
}

console.log(sum(10));

// factorial without memoization

function fact(n) {
  if (n == 0) {
    return 1;
  }
  return fact(n - 1) * n;
}

// factorial with memoization -> it only works for large volume of requests.

const cache = [];

function memFact(n) {
  if (n in cache) {
    return cache[n];
  } else {
    if (n === 0 || n === 1) {
      cache[n] = 1;
    } else {
      cache[n] = n * memFact(n - 1);
    }
    return cache[n];
  }
}

console.log("Factorial without memoize: " + fact(5));
console.log("Factorial with memoize: " + memFact(5));

// power of a number

function pow(n, p) {
  if (p === 0) {
    return 1;
  } else {
    return pow(n, p - 1) * n;
  }
}

console.log(pow(2, 3));

// taylor series with rec

let p = 1,
  f = 1;

function e(x, n) {
  if (n === 0) {
    return 1;
  }
  let r = e(x, n - 1);
  p *= x;
  f *= n;
  return r + p / f;
}

console.log("taylor result is: " + e(1, 10));

// Combination Formula using recursion

function combination(n, r) {
  if (r === 0 || n === r) {
    return 1;
  } else {
    return combination(n - 1, r - 1) + combination(n - 1, r);
  }
}

console.log("Combinations using pascal triangule is: " + combination(4, 2));

// Hanoi tower with recursion

let counter = 0;

function hanoiOf(diskNum, towerA, towerB, towerC) {
  if (diskNum > 0) {
    counter++;
    hanoiOf(diskNum - 1, towerA, towerC, towerB);
    console.log(
      "Solution is steps is move from tower " + towerA + " to tower " + towerC
    );
    hanoiOf(diskNum - 1, towerB, towerA, towerC);
  }
}

hanoiOf(10, 1, 2, 3);
console.log("Quantidade de movimentos minimos é: " + counter);
