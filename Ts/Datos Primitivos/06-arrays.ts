(() => {
  let prices = [1, 2, 3, 4, 5, "hola", true];
  let products = [true, "bye"];
  let mixed: (number | string | boolean)[] = ["hola", false];
  mixed.push(12);
})();
