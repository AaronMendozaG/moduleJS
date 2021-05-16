console.log ("METODOS DE ARRAY")


// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

let arrayNumbers=[2,5,6,4,8,3,9,54]
let highNumber=arrayNumbers[0]

  arrayNumbers.forEach((item)=> item>highNumber ? highNumber=item : "")
  console.log(highNumber)






// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

let arrToConvert=[1,6,78,9,0]
let newArr=''
  arrToConvert.forEach((item) =>{
    newArr+= item.toString()
    
    })
    console.log(newArr) 

