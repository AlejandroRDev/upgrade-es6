/*     Crea una arrow function que tenga dos parametros a y b y 
    que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
    por consola la suma de los dos parametros.
 */
/* 1.1 Ejecuta esta función sin pasar ningún parametro */
const a = 10;
const b = 5;

const sum = (a, b) =>{
    const result = a + b;
    console.log(result);
};
sum();
/* 1.2 Ejecuta esta función pasando un solo parametro */

sum(a);

/* 1.3 Ejecuta esta función pasando dos parametros */

sum(a, b);