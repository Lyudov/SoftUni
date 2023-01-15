function lastKNumbersSequence(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
      let sum = 0;
      for (let j = i - k; j < i; j++) {
        if (j >= 0) {
          sum += sequence[j];
        }
      }
      sequence.push(sum);
    }
    return sequence;
  }
  console.log(lastKNumbersSequence(6,3));
