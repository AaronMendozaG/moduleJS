/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

        //function celsiusToF(temp,initial="c",finish="f") {
        //    if (initial === "f") {
        //       return console.log(((temp - 32)*5)/9)
        //    }else{
        //        return console.log((temp*9)/5 + 32)
        //    }
        //    
        //    
        //}
        //
        //celsiusToF(100,"f","c")


/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas acciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar a la cuenta 1234 $500 (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depósitos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */

function retiro(cant) {
    
    return cant>saldoInicial ? console.log(`Ya no cuentas con saldo suficiente para realizar el retiro, saldo actual ${saldoInicial}`):saldoInicial-=cant
}
function deposito(cantDep) {
    return cantDep<=0 ? 
    console.log("Ingrese una cantidad mayor a 0"):
    saldoInicial+=cantDep 
    
}

function traspasar(cuenta,cant) {
   return cant>saldoInicial ? console.log("No cuentas con el saldo suficiente para traspasar"):saldoInicial-=cant
}
function consultaSaldo() {

    return console.log(`Tienes de saldo:  ${saldoInicial}`)
}

let saldoInicial=2000

retiro(600)
consultaSaldo()