// https://lenguajejs.com/javascript/asincronia/promesas/promises.png
// https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png

// let books = []
let books = [
    {
        id: 1,
        title:'La teoría del todo'
    },
    {
        id: 2,
        title:'Artemisa'
    },
    {
        id: 3,
        title:'1984'
    }
]

// obtener esos datos
// const getBooks = () => {
//     return books
// }

// const getBooks = () => {
//     setTimeout(() => {
//         // sentencias
//         return books
//     }, 1000);
//     console.log('finaliza la funcion')
// }

// console.log(getBooks())





const getBooks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(books)
        }, 2000)
    })
}

let promesa = new Promise((resolve, reject) => {
    if(books.length > 0){
        setTimeout(() => {
            resolve(books)
        }, 2000)
    } else {
        setTimeout(() => {
            reject( {
                error: true,
                message: 'No hay libros que mostrar'
            })
        }, 2000)
    }
})


// promesa
// .then( response => {
//     return response
//     console.log(response)
// })
// .then( response => {
//     console.log(response)  
//     let title = response.filter(item => item.id === 2)[0].title
//     console.log(title)
// })
// .catch(err => {
//     console.log(err.message)
// })



// async / await


// let dataFetched =  await getBooks() 
// console.log(dataFetched)

// let fetchingData = async () => {
//     let dataFetched =  await getBooks()
//     console.log(dataFetched)
// }


// fetch(url).then(response => response.json())

async function fetchingData (){
    try {

        let posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
        let comments = await $.get('https://jsonplaceholder.typicode.com/comments')
        let albums = await $.get('https://jsonplaceholder.typicode.com/albums')
        console.log( comments, albums, posts)

    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
    
    // console.log(posts,comments,albums)
}
fetchingData()


// async function fetchingData (){
//     try {
//         let dataFetched =  await getBooks()
//         console.log(dataFetched)
//     } catch (error) {
//         console.log(error)
//         console.log(error.message)
//     }
// }