/*let a=window.prompt("Cual es la variable a");
let b=window.prompt("Cual es la variable b");
parseInt(a);
parseInt(b);
if(a>b){
    console.log(a/ b)


}else if (a<b){
    console.log(a+ b);
}else {
    console.log(a* b);
}*/

/* CALCULAR EL PESO EN LA LUNA
 let name=window.prompt("Ingrese su nombre");
let peso=parseInt(window.prompt("Ingrese su peso actual en KG")) ;

function calculaPesoLunar(peso){
    
    let pesoLunar;
    pesoLunar=(peso/9.81)*1.622;
    return pesoLunar;
}

console.log("Hola "+name+" Tu peso Lunar es "+calculaPesoLunar(peso));
 */

/* CLACULO DE CALIFICACIONES EN LETRA
 let cal=parseInt(window.prompt("Digite su calificacion"));


if (cal >100){
    console.log("La calificacion maxima es 100")
}else if (cal>=90){
    console.log("A");
}else if((cal>=80) && (cal<90)) {
    console.log("B");
}else if((cal>=70) && (cal<80) ){
    console.log("C");
}
else if((cal>=60) && (cal<70) ){
    console.log("D");
}else if((cal>=50) && (cal<60) ){
    console.log("E");
}else {
    console.log("F");
}
 */

/* MULTIPLOS DE NUMEROS DEL 1 AL 100
 let number=parseInt(window.prompt("Ingrese un numero"));

if (number<1 || number>100){
    console.log("Solo se permiten numero del 1 al 100")
}else if (number%2===0 && number%3===0  ){
    console.log("Es multiplo de 2 y 3")
}else if (number%2===0 && number%11===0  ){
    console.log("Es multiplo de 2 y 11")
}else if (number%2===0){
    console.log("Es multiplo de 2")
}
    else if(number%3===0){
    console.log("Es multiplo de 3")
}else if(number%11===0){
    console.log( "Es multiplo de 11")
}else{
    console.log("No tiene multiplo")
}

 */

let number=parseInt(window.prompt("Ingrese un numero"));
let parImpar=(number%2===0) ? console.log("Es Par"): console.log("Es impargit ");
