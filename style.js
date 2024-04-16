function checkNum(n) {
  let max = 0;
  let countOddy = [];
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    if (max < n[i]) {
      max = n[i];
    }
  }

  for (let j = 0; j < n.length; j++) {
    if (n[j] % 2 === 1) {
      countOddy.push(n[j]);
    }
  }

  for (let x = 0; x < n.length; x++) {
    sum += n[x];
  }

  console.log(max);
  console.log(countOddy);
  console.log(sum);
}

console.log(checkNum([4, 8, 2, 11, 6, 7, 10]));
