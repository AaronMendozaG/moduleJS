let search = window.location.search
let start = search.indexOf('=') + 1
let idKoders = search.slice(start)
 


const printKoder = (arr) => {
    let acc = ''
    arr.forEach((koder,index) => {
        acc += `
        <tr>
        <td scope="row">${index+1}</td>
        <td>${koder[1].name}</td>
        <td><a href="/modifyKoder.html?id=${koder[0]}" class="btn btn-outline-info pr-4">Editar</a></td>
        <td><a href="" class="btn btn-outline-info pr-4 deletekoder"  data-id="${koder[0]}">Eliminar</a></td>
        </tr>
        
        `
    });
    let listKoder= document.querySelector('.table tbody')
    listKoder.innerHTML = acc
    
}


//let deleteKoderBtn = document.getElementById('btn-delete-koder')
// if (deleteKoderBtn) {
//    
//    deleteKoderBtn.addEventListener('click',(e)=>{
//        let idKoderObj=e.target.dataset.id
//        console.log(idKoderObj)
//        const requestDelete = new XMLHttpRequest()
//        requestDelete.open('DELETE',`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoderObj}.json`)
//        requestDelete.addEventListener('readystatechange', () => {
//         if(requestDelete.readyState !== 4) {
//             return 
//         } else {
//             if(requestDelete.status >= 200 && requestDelete.status <= 299){
//                 const response  = requestDelete
//                 const objectResponse = JSON.parse(response.responseText)
//                 console.log(objectResponse)
//             } else {
//                 console.log('No se pudo ejecutar')
//             }
//         } 
//     })
//     requestDelete.send()
//    })
// }


let listkoders = document.querySelector('.list-koders tbody')
listkoders.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log(e.target.dataset.id)
    if(e.target.classList.contains('deletekoder')) {
        let idkoder = e.target.dataset.id

        const requestDelete = new XMLHttpRequest()
        requestDelete.open('DELETE',`https://python2gtest-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
        requestDelete.addEventListener('readystatechange', () => {
            if(requestDelete.readyState !== 4) {
                return 
            } else {
                if(requestDelete.status >= 200 && requestDelete.status <= 299){

                    const objectResponse = JSON.parse(requestDelete.responseText)
                    window.location.reload()
                    
                } else {
                    console.log('No se pudo ejecutar')
                }
            } 
        })
        requestDelete.send()
        
    }
})




const request = new XMLHttpRequest()
request.open('GET','https://python2gtest-default-rtdb.firebaseio.com/koders/.json')
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            printKoder(Object.entries(objectResponse))
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()











 


        
        
    






