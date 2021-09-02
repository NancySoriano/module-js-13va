/*let primerNumero = prompt ("Ingresa el primer número");
let segundoNumero = prompt ("Ingresa el segundo número");

primerNumero = Number (primerNumero);
segundoNumero = Number (segundoNumero);

let resultadoSuma = primerNumero+segundoNumero;
let resultadoResta = primerNumero-segundoNumero;
let resultadoMultiplicacion = primerNumero*segundoNumero;
let resultadoDivision = primerNumero/segundoNumero;


console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);*/

/*
let primerNumero = prompt ("Ingresa primer número");
let segundoNumero = prompt ("Ingresa segundo número");
let evalua = undefined;

if (primerNumero>segundoNumero) {

    console.log("El número es mayor que el segundo número");
} else 
    console.log("El primero número es menor al segundo número");*/
/*
    let primerletra = prompt ("Ingresa primer letra");
    let segundaletra = prompt ("Ingresa segundo letra");

if(primerletra>segundaletra){

    console.log(`Esta letra ${primerletra} aparece después que ${segundaletra}`);
} else console.log(`Esta letra ${segundaletra}aparece antes que ${primerletra}`);
*/
/*tarea*/
let nombre = prompt ("Ingresa tu nombre");
let peso = prompt ("Ingresa tu peso");
let pesomarte;
let pesojupiter;
let pesoluna;

const JUPITER = 24.8;
const MARTE = 3.7;
const LUNA =  1.62;
const TIERRA = 9.81;

pesojupiter=((peso*JUPITER)/TIERRA);
pesomarte=((peso*MARTE)/TIERRA);
pesoluna=((peso*LUNA)/TIERRA);


console.log (`${nombre} Tu peso en Jupiter es: ${pesojupiter}`);
console.log (`${nombre} Tu peso en Marte es: ${pesomarte}`);
console.log (`${nombre} Tu peso en la luna es: ${pesoluna}`);