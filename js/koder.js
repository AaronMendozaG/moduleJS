const printKoder = (arr) => {
    let acc = ''
    arr.forEach((koder,index) => {
        acc += `
        <tr>
        <td scope="row">${index+1}</td>
        <td>${koder[1].name}</td>
        <td><a href="/modifyKoder.html?id=${koder[0]}" class="btn btn-outline-info pr-4">Editar</a></td>
        <td><a href="/listKoders.html?id=${koder[0]}" class="btn btn-outline-info pr-4" id="btn-delete-koder">Eliminar</a></td>
        </tr>
        
        `
    });
    let listKoder= document.querySelector('.table tbody')
    listKoder.innerHTML = acc
    
}


const request = new XMLHttpRequest()
request.open('GET','https://python2gtest-default-rtdb.firebaseio.com/koders/.json')
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
            console.log(Object.entries(objectResponse))
            printKoder(Object.entries(objectResponse))
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()








let search = window.location.search
let start = search.indexOf('=') + 1
let idKoders = search.slice(start)

console.log(typeof(idKoders))
 let deleteKoderBtn = document.getElementById('btn-delete-koder')
 if (deleteKoderBtn) {
    
    deleteKoderBtn.addEventListener('click',()=>{
        
        const requestDelete = new XMLHttpRequest()
     requestDelete.open('DELETE',`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoders}.json`)
     requestDelete.addEventListener('readystatechange', () => {
         if(requestDelete.readyState !== 4) {
             return 
         } else {
             if(requestDelete.status >= 200 && requestDelete.status <= 299){
                 const response  = requestDelete
                 const objectResponse = JSON.parse(response.responseText)
                 console.log(objectResponse)
             } else {
                 console.log('No se pudo ejecutar')
             }
         } 
     })
     requestDelete.send()
    })
 }


 


        
        
    






