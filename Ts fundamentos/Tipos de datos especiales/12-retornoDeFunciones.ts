//!Void
//Es cuando una función no retorna nada
(() => {
  const calctotal = (
    prices: number[]
  ): number /*tipar el resultado de la función*/ => {
    let total = 0;
    prices.forEach((item) => {
      total + item;
    });
    return total;
  };

  calctotal([1, 2, 3, 4, 5]);

  const printTotal = (prices: number[]): void /*No retorna nada */ => {
    const rta = calctotal(prices);
    console.log(rta);
  };

  const rta = printTotal([1, 2, 3, 4]);
})();
