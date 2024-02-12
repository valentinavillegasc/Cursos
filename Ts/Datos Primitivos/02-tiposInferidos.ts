//!Tipos inferidos

let myProductName = "Product 1"; // ahora en adelante ya no le puedo asignar un tipo de dato diferente a esta variable
let myProductNumber = 123;

(() => {
  let myProductName = "Product 1";
})(); //Función anonima autoejecutada, con esto se pueden aislar los datos para poder usar los mismos nombres de las variables en otros archivos.
