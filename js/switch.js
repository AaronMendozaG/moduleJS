let cal =parseInt(window.prompt("Ingrese la calificacion"));

switch (cal){
    case 100:
        console.log("Tu calificacion es A+")
        break
    case 90:
        console.log("Tu calificacion es A")
        break
    case 80:
        console.log("Tu calificacion es B")
        break
    case 70:
        console.log("Tu calificacion es C")
        break
    case 50:
        console.log("Tu calificacion es E")
        break
    default:
        console.log("Tu calificacion es muy baja")
}