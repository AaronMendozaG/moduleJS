let num1=parseInt(window.prompt("Ingrese el primer numero"));
let num2=parseInt(window.prompt("Ingrese el segundo numero"));
let num3=parseInt(window.prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1>num3){
    console.log(`El numero ${num1} es le mayor de los tres numeros ingresados`)
}else if (num2 > num1 && num2>num3){
    console.log(`El numero ${num2} es le mayor de los tres numeros ingresados`)
}else if (num3 > num1 && num3>num2) {
    console.log(`El numero ${num3} es le mayor de los tres numeros ingresados`)
}else{
    console.log("Ninguno es el mayor")
}