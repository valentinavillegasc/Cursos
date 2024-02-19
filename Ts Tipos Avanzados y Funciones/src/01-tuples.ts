const prices: (number | string)[] = [1, 3, 2, 2, 2];
prices.push(2);

//Tuple
//Se debe definir la cantidad de elementos y la posicion del tipo de dato
let user: [string, number];
user = ['valev', 22];
//user = ['vale'] //!ERROR
//user = ['vale', 22, 23] //!ERROR

//Desestructurar un tuple

const [username, age] = user;
