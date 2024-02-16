(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];

  const agregarProduct = (data: Product) => {
    products.push(data);
  };

  agregarProduct({
    title: "producto1",
    createdAt: new Date(),
    stock: 12,
  });
})();
