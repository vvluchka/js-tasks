function hiddenFee(prices, t) {
    return (
      prices.map(num => Number(num.slice(1))).reduce((acc, curr) => acc + curr) <
      Number(t.slice(1))
    );
  }

console.log(hiddenFee(["$2", "$4", "$1", "$8"], "$15"));