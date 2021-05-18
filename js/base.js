console.log ("GETTERS AND SETTERS")

//METODOS DE OBJETOS 






//EJERCICIOS
let koders=[
  {
    name:'Aaron',
    lastName:'Mendoza',
    age:25,
    
  },
  {
    name:'Carlos',
    lastName:'Alcibar',
    age:25,
    
  }
]



koders.forEach(item=>{
  item.fullKoder= function(){
    return `El koder ${this.name} ${this.lastName} tiene ${this.age}`
  }
})

koders.forEach(item=>{
  return console.log (item.fullKoder())
})


//getter, funcion que obtiene el valor de una propiedad




//setter, funcin que establece un valor de una propiedad


