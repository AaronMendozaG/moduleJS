/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/

let arrayToReverse = [1,2,3,4,5,6]

const arrayReverse = (arr) => console.log(arr.reverse())

arrayReverse(arrayToReverse)

/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/

        //let arrayOne=[1,2,3,4]
        //let arrayTwo=[1,2]
        //let arrayConcat=arrayOne.concat(arrayTwo)
        //let suma=0
        //
        //arrayConcat.forEach(item => {
        //    suma += item
        //})
        //console.log(suma)



/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/

let arrayOne=[1,2,3,4]
let arrayTwo=[1,2,4]

const getRepeat=(arrOne,arrTwo)=>{
     return getNewArr=arrOne.filter(item=>{
        if (arrTwo.includes(item)) {
            return item
        }
    }

    )
}

console.log(getRepeat(arrayOne,arrayTwo))





