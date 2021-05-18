/**
 * Teniendo como base este array de objetos
 
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        athor: 'Suteve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
 * Crear las funciones que :
 * Ordene el array de objetos de acuerdo al titulo
 * Ordene el array de objetos de acuerdo al autor
 * Ordene el array de objetos de acuerdo al "readingStatus"
 * Filtre los libros que estan ocupados
 * 
 */ 

let newItem=[]
const transformItem=arr=>{
    return arr.forEach(item => {
              return  newItem.push(Object.values(item)) 
                
            });
}
        //const getTitle=arr=>{
        //
        //    return newItem.sort((a,b)=>{
        //    if (a[1]>b[1]) {
        //        return 1
        //    }
        //    if(a[1]<b[1]){
        //        return -1
        //    }
        //    return 0
        //})
        //
        //}

const getTitle=arr=>{
return  arr.sort((a,b)=>{
     if (a.title>b.title) {
         return 1
     }else if(a.title<b.title){
         return -1
     }
     return 0
 })
 
 }

        //const getAuthor=arr=>{
        //    return newItem.sort((a,b)=>{
        //    if (a[0]>b[0]) {
        //        return 1
        //    }
        //    if(a[0]<b[0]){
        //        return -1
        //    }
        //    return 0
        //})
        //
        //}

 
 const getAuthor=arr=>{
    return  arr.sort((a,b)=>{
         if (a.author>b.author) {
             return 1
         }else if(a.author<b.author){
             return -1
         }
         return 0
     })
     
     }


//      const getStatus=arr=>{
        //    return newItem.sort((a,b)=>{
        //    if (a[2]>b[2]) {
        //        return 1
        //    }
        //    if(a[2]<b[2]){
        //        return -1
        //    }
        //    return 0
        //})
        //
        //}


const getStatus=arr=>{
   return arr.sort((a,b)=>{
        if (a.readingStatus>b.readingStatus) {
            return 1
        }else if(a.readingStatus<b.readingStatus){
            return -1
        }
        return 0
    })
    
    }
    let library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }
    ]


console.log(getTitle([...library]))
console.log(getAuthor([...library]))
console.log(getStatus([...library]))

  
/**
 * Dado un array con objetos que tienen la propiedad de fecha de nacimiento
 * convertir las fechas de formato yyyy/mm/dd
 * al formato dd/mm/yyyy
[
    {
        name:'Jorge',
        birthdate: '1991/05/12'
    },
    {
        name:'luis',
        birthdate: '1991/02/12'
    },
    {
        name:'mario',
        birthdate: '1991/04/12'
    },
    {
        name:'victor',
        birthdate: '1991/09/12'
    }
]
const convertBirthdates = (arr) =>{
    // code here
}  
console.log(moveCharsForward( [{ name:'Jorge', birthdate: '1991-0/05/12' }] ))
// -> [{ name:'Jorge', birthdate: '05/12/1991' }, ...]
 */

let dates=[
    {
        name:'Jorge',
        birthdate: '1991/05/12'
    },
    {
        name:'luis',
        birthdate: '1991/02/12'
    },
    {
        name:'mario',
        birthdate: '1991/04/12'
    },
    {
        name:'victor',
        birthdate: '1991/09/12'
    }
]

