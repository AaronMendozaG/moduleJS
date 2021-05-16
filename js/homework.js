
/**
 * 
 * Ejercicio 1
 
Dado el array [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
Calcular el numero de personas que si votaron
Output -> 1
Nota: las personas que si votaron tiene true
*/

            let votantes=[["Aaron",true],["Carlos",true],["Miguel",false]]
            
            //const getVotes=arr=>{ totalVotes=arr.reduce((acc,item)=>{
            //              if (item[1]===true) {
            //                 acc++
            //                  
            //              }
            //              return acc
            //    },0)
            //}

const getVotes=arr=>totalVotes=arr.reduce((acc,item)=>(item[1]===true ? acc++ :'',acc),0)
  
            
            console.log(getVotes(votantes))



/**
 * 
 * Ejercicio 2
 
    Dado un array con pedidos de un restaurant
    la estructura por cada pedido es 
    ['entrada','principal','postre','precio'],
    let pedidos = [
        ['ensalada de pepinos','paella','platano', 100'],
        ['ensalada de tomates','pescado','helado', 120],
        ['ensalada simple','paella','yogurt', 80],
        ['ensalada simple','enchiladas','yogurt', 80],
        ['ensalada cesar','salmón','platano', 100],
    ]
    Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
    Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
    Funcion que devuelve los pedidos que tengen un precio superior a 90 
    Funcion que devuelve los pedidos que tengen un precio superior a 90 
*/

let orders=[ 
    ['ensalada de pepinos','paella','platano', 100],
    ['ensalada de tomates','pescado','helado', 120],
    ['ensalada simple','paella','yogurt', 80],
    ['ensalada simple','enchiladas','yogurt', 80],
    ['ensalada cesar','salmón','platano', 100]
   ]
                    //const principal=arr=>{
                    //platoPrincipal=arr.reduce((acc,item,arr)=>{
                    //    if (item[1]==='paella') {
                    //        
                    //    return acc+1
                    //    
                    //    }
                    //    
                    //},0)
                    //}

const principal=arr=>platoPrincipal=arr.reduce((acc,item)=>item[1]==='paella' ? acc+1 :'',0)
    

            //const getDessert=arr=>{
            //return dessert=arr.filter(item=>{
            //    if (item[2]==='platano' || item[2]==='helado'){
            //        return item
            //    }   
            //})
            //}

            const getDessert=arr=>dessert=arr.filter(item=>(item[2]==='platano' || item[2]==='helado') ? item : '')
            console.log(getDessert(orders))








            //const getUpTo=arr=>{
            //    return dessert=arr.filter(item=>{
            //        if (item[3]>90){
            //           return item
            //        }   
            //   })
            //   }


            const getUpTo=arr=>dessert=arr.filter(item=>item[3]>90 ? item : '')
            console.log(getUpTo(orders))