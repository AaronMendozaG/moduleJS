console.log ("METODOS DE ARRAY")


let myArray=['Aaron',8,[1,'Mendoza']] 
// Métodos de array
// for(let i = 0;i < myArray.length; i++){
//     console.log(myArray[i])
// }

// Metodos funcionales de arrays
// forEach() -> 
// reduce() -> unidad
// filter() -> []
// map() -> []

// myArray.forEach( function(item, index, arrayOriginal) {
//     console.log(`indice ${index}:`, item)
// })

// myArray.forEach( (item, index, arrayOriginal) => {
//     console.log(`indice ${index}:`, item)
// })

// const functionCalled = (item, index, arrayOriginal) => {
//     console.log(`indice ${index}:`, item)
// }

// myArray.forEach( functionCalled )

// let newArray = []
// myArray.forEach( (item, index, arrayOriginal) => {
//     newArray[index] = (index * 100) / 5
// })
// console.log(newArray)

// filter method
let arrayForfilter = [1,2,3,4,5]
let evensNumbers = arrayForfilter.filter((value, index, array) => {
    if(value > 3 && value < 5){
        return value
    }
    // return value > 3 && value < 5
})

// console.log(arrayForfilter)
// console.log(evensNumbers)