(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({ email: "vale@mail.com", password: "Vale1" });

  type Sizes = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const agregarProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  agregarProduct({
    title: "producto1",
    createdAt: new Date(),
    stock: 12,
  });
})();
