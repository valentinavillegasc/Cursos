import { products, agregarProduct, calcStock } from "./product.servic";

agregarProduct({
  title: "producto1",
  createdAt: new Date(),
  stock: 12,
});
agregarProduct({
  title: "producto2",
  createdAt: new Date(),
  stock: 5,
});

console.log(products);

const total = calcStock();

console.log(total);
