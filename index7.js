function fibonacci(n) {
    const fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);
  }
console.log(fibonacci(10));