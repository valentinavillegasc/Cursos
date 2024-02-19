//never type se usa para funciones que se sabe que no van a terminar

const withoutend = () => {
  while (true) {
    console.log('aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};
