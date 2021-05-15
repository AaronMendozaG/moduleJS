console.log ("OBJETOS")

// TEORIA



//EJERCIOS

//let pedidos = [
//  ['ensalada de pepinos','paella','platano', 100'],
//  ['ensalada de tomates','pescado','helado', 120],
//  ['ensalada simple','paella','yogurt', 80],
//  ['ensalada simple','enchiladas','yogurt', 80],
//  ['ensalada cesar','salmón','platano', 100],
//]

let pedidos=[
  {
    entrada:'ensalada de pepinos',
    principal:'paella',
    postre:'platano',
    precio:100
  },
  {
    entrada:'ensalada de tomates',
    principal:'pescado',
    postre:'helado',
    precio:120
  },
  {
    entrada:'ensalada simple',
    principal:'paella',
    postre:'yogurt',
    precio:80
  },
  {
    entrada:'ensalada de pepinos',
    principal:'enchiladas',
    postre:'yougurt',
    precio:80
  },
  {
    entrada:'ensalada cesar',
    principal:'salmon',
    postre:'platano',
    precio:100
  }
]

const principal=arr=>{
  return arr.reduce((acc,item)=>{
            if (item.principal==='paella') {
                
               return acc+1
              
            }
              return acc
            
            
    },0)
}

console.log(principal(pedidos))


//for in  (en donde lo quieres,in, objeto que va a iterar)
let objPedido={
  entrada:'ensalada cesar',
  principal:'salmon',
  postre:'platano',
  precio:100
}

for(key in objPedido){
  console.log(key,objPedido(key))
}

Object.keys()
Object.entries()
Object.values()