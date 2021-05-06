let celsius=parseInt(window.prompt("Ingrese los grados celsus a convertir"));

function convertirGrados(celsius){
    let farenheit
    return farenheit=(celsius*9/5)+32; 
}

alert(`Los ${celsius} grados celsius son igual a ${convertirGrados(celsius)} grados Farenheit`)