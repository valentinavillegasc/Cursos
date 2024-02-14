(() => {
  type Sizes = "S" | "M" | "L" | "XL";

  function createProducToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return { title, createdAt, stock, size };
  }

  const product1 = createProducToJson("P1", new Date(), 12, "XL");

  const createProducToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //que puede ser opcional
  ) => {
    return { title, createdAt, stock, size };
  };

  const product2 = createProducToJson2("P1", new Date(), 12);
})();
