//Los enums
//Un enum es un tipo de dato que nos permite crear un set de opciones.
//Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const valeUser: User = {
  username: 'valev',
  role: ROLES.ADMIN,
};
