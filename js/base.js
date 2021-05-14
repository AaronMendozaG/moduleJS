console.log ("METODOS DE ARRAY")

// .map() -> array computado, tiene la misma longitud del original, transforma cada item en uno nuevo.



// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings
    //let arrNum=[1,2,3,4,5,6]
    //
    //const convertArr=arr=>{
    //  return newItem = arr.map( item=>{
    //      return item.toString()
    //    }
    //    
    //    )
      //
    //}
    //console.log(convertArr(arrNum))



      //let names=["aaron","javier","juan"]
      //
      //const capitalizerNm=arr=>{
      //  return neeItem=arr.map(item=>{
      //    return item.indexOf(0).toUpperCase()
      //  })
      //}
      //console.log(capitalizerNm(names))



// Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays, 
// y retorne un array con los nombres completos

          //let names=["Aaron","Jorge"]
          //let surNames=["Mendoza","Camarillo"]
          //
          //const concatNames = (names,surNames)=>{
          //  return completeName=names.map(function (item,index) {
          //    return item.concat(this[index])
          //  },surNames)
          //}
          //console.log(concatNames(names,surNames))

///////METODO REDUCE//////

      //let arrNum=[1,2,3]
      //
      //const toString=arr=>{
      //  return newArr = arr.reduce((acc,item)=>{
      //    return acc+item
      //  },"")
      //}
      //console.log(toString(arrNum))

     

    let myCar=
        [
          ["Reloj", 500] , 
          ["Reloj", 300] , 
          ["Reloj", 1200]  
        ]
    
    const calculeTotal=arr=>{
        return suma=arr.reduce((acc,item)=>{
          return acc+item[1]
        } 
          
          ,0)
    }

    console.log(calculeTotal(myCar))