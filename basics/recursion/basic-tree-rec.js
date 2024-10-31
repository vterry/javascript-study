function treeRec(n) {
  if (n > 0) {
    console.log(n);
    treeRec(n - 1);
    treeRec(n - 1);
  }
}

treeRec(10);
