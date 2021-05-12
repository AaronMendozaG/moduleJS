
let saldoInicial=2000
let consultas=0
let depositos= 0
let retiros = 0

const retiro = (cant) =>(
    retiros++, cant>saldoInicial ? 
               console.log(`Ya no cuentas con saldo suficiente para realizar el retiro, saldo actual ${saldoInicial}`):
               console.log(`Se retiro de manera correcta la cantidad de ${cant}, saldo actual: ${saldoInicial-=cant}`)
)
    


const deposito = (cantDep)=> (
    depositos++ , cantDep<=0 ? console.log("Ingrese una cantidad mayor a 0"):console.log(`Se deposito la cantidad ${cantDep}, saldo actual ${saldoInicial+=cantDep}`) 
)
    
                

const traspasar = (cuenta,cant) => cant>saldoInicial ? 
                                   console.log(`No cuentas con el saldo suficiente para traspasar, saldo actual ${saldoInicial}`):
                                   console.log(`Se traspaso de manera exitosa de tu cuenta: ${cuenta} la cantidad de: ${cant}, saldo actual ${saldoInicial-=cant}`) 

const consultaSaldo= () => (
    consultas++,console.log(`Tienes de saldo:  ${saldoInicial} Numero de consultas: ${consultas}`)
)
    



 