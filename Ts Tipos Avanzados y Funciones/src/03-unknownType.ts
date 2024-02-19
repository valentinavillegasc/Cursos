let anyvAR: any;
anyvAR = true;
anyvAR = 'hola';
anyvAR = 123;

//!Unknown

/* El unknown type nos indica que una variable es de un tipo de dato desconocido.
Es similar a any, pero sin quitar el análisis de código estático que nos brinda TypeScript.
El tipo unknown nos fuerza a hacer una verificación de tipo. 
Esta es la forma que TypeScript sugiere trabajar con variables de las cuales no sabemos de qué tipo serán.
 Así evitamos utilizar constantemente any. */

let unknownVar: unknown;
unknownVar = true;
unknownVar = 'hola';
unknownVar = 123;
