/*   EJERCICIO 1

let month=parseInt(window.prompt("Ingrese un numero del 1 al 12"));

switch(month){
    case 1:
        console.log(`El mes ${month} (Enero) tiene 31 dias`);
        break;
    case 2:
        console.log(`El mes ${month} (Febrero) tiene 28 dias`);
        break;
    case 3:
        console.log(`El mes ${month} (Marzo) tiene 31 dias`);
        break;
    case 4:
        console.log(`El mes ${month} (Abril) tiene 30 dias`);
        break;
    case 5:
        console.log(`El mes ${month} (Mayo) tiene 31 dias`);
        break;
    case 6:
        console.log(`El mes ${month} (Junio) tiene 30 dias`);
        break;
    case 7:
        console.log(`El mes ${month} (Julio) tiene 31 dias`);
        break;
    case 8:
        console.log(`El mes ${month} (Agosto) tiene 31 dias`);
        break;
    case 9:
        console.log(`El mes ${month} (Septiembre) tiene 30 dias`);
        break;
    case 10:
        console.log(`El mes ${month} (Octubre) tiene 31 dias`);
        break; 
    case 11:
        console.log(`El mes ${month} (Noviembre) tiene 30 dias`);
        break;
    case 12:
        console.log(`El mes ${month} (Enero) tiene 31 dias`);
        break;
    default:
        console.log(`${month} no es un numero valido`)
    
}*/

/* EJERCICIO 2
let day=window.console("Como estuvo tu dia?: Nublado, Soleado, Lluvioso, Nevado");

switch (day){
    case Nublado:
        console.log("Oh, es un dia para quedare en casa por si llueve")
        break;
    case Soleado:
        console.log("Oh, es un buen dia para estar en la playa")
        break;
    case Lluvios:
        console.log("Oh, es un buen dia para estar en casa")
        break;
    case Nevado:
        console.log("Oh, es un buen dia para salir a jugar en la nieve")
        break;
    default:
        console.log("Que te gustaria hacer hoy?")
    
}*/

var palabra=window.prompt("Dame una palabra");
var num=parseInt(window.prompt());

for (let i=0;i<num;i++){
    console.log(`${palabra}`);
}