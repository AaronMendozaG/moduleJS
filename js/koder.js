


const printKoder = (arr) => {
    let acc = ''
    arr.forEach((koder,index) => {
        acc += `
        <tr>
        <td scope="row">${index+1}</td>
        <td>${koder[1].name}</td>
        <td><a href="/modifyKoder.html?id=${koder[0]}" class="btn btn-outline-warning pr-4">Editar</a></td>
        <td><a href="" class="btn btn-outline-danger pr-4 deletekoder"  data-id="${koder[0]}">Eliminar</a></td>
        </tr>
        
        `
    });
    let listKoder= document.querySelector('.table tbody')
    listKoder.innerHTML = acc
    
}



let listkoders = document.querySelector('.list-koders tbody')
listkoders.addEventListener('click', (e)=> {
    
    if(e.target.classList.contains('deletekoder')) {
        e.preventDefault()
        let idkoder = e.target.dataset.id
        deleteKoderFetch(idkoder)

        
        
        
    }
})



const getAllKodersFetch = () => {
    // GET
    fetch('https://python2gtest-default-rtdb.firebaseio.com/koders/.json').then(result => {
        return result.json()
    }).then(response => {
        console.log('print koders')
        printKoder(Object.entries(response))
    })   
}
getAllKodersFetch()

const deleteKoderFetch=(idKoder)=>{
    fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,{
        method:'DELETE'
    }).then(result => {
        return result.json()
    }).then(response => {
        window.location.reload()
        console.log('Eliminado')
    })   
}









 


        
        
    






