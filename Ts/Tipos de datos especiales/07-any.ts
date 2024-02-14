//!Any
(() => {
  let myDinamicVar: any; //Se quita el sistema de analisis de tipos en una variable en particular
  //Se aconseja no usar any

  //?Formas de cambiar el tipo de dato de una variable
  myDinamicVar = "Hola";
  const rta = (myDinamicVar as string).toLowerCase(); // aquí fuerzo el cambio de dato de mi variable

  myDinamicVar = 123;
  const rta2 = (<number>myDinamicVar).toFixed();
})();
