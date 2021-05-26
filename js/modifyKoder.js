let search = window.location.search
let start = search.indexOf('=') + 1
let idKoder = search.slice(start)



const getAllKodersFetch = () => {
    // GET
    fetch('https://python2gtest-default-rtdb.firebaseio.com/koders/.json').then(result => {
        return result.json()
    }).then(response => {
        console.log('print koders')
        let koderObject = Object.entries(response).filter((koder)=> {
            if(koder[0] === idKoder){
                return  koder
            }
        })[0][1]
        console.log(koderObject)
        const printKoder = (objkoder) => {
            let {name,lastName,age,position}= objkoder
            document.getElementById('name').value=name
            document.getElementById('last-name').value=lastName
            document.getElementById('age').value=age
            document.getElementById('position').value=position
        }
        
        printKoder(koderObject)
    })   
}
getAllKodersFetch()

 let modifyKoderBtn = document.getElementById('btn-modify-koder')
 modifyKoderBtn.addEventListener('click',()=>{
    let nameKoder=document.getElementById('name').value
    let lastName=document.getElementById('last-name').value
    let ageKoder=parseInt(document.getElementById('age').value)
    let positionKoder=document.getElementById('position').value
    if (nameKoder=='' || lastName == '' || ageKoder=='' || position=='') {
        window.alert('Ingresa todos los datos solicitados' )
        return
    }
    let newKoder={
        name:nameKoder,
        lastName:lastName,
        age:ageKoder,
        position:positionKoder
    }
 
    putKoderFetch(idKoder,newKoder)
})

const putKoderFetch= (idKoder,newKoder)=>{
    fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,{
        method:'PUT',
        body:JSON.stringify(newKoder)
    }).then(result => {
        return result.json()
    }).then(response => {
        console.log('Eliminado')
    })   
}
























