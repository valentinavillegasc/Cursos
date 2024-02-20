//los parámetros opcionales van de últimas
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10, // nullish-coalescing Si no viene un valor, se le astgna un valor por defecto '10'
    isNew: isNew ?? false, //Si no viene un valor, se le astgna un valor por defecto 'true'
  };
};

//Se usa nullish-coalescing para evitar problemas con estos resultados
// 0 === false
//''===false
//false===false

const p1 = createProduct(1, true, 12);
// {id:1, stock:12, isNew:true}
const p2 = createProduct(1);
// {id:1, stock:10, isNew:false}
