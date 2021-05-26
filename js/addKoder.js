let addKoderBtn = document.getElementById('btn-create-koder')
addKoderBtn.addEventListener('click',()=>{
    let nameKoder=document.getElementById('name').value
    let lastName=document.getElementById('last-name').value
    let ageKoder=document.getElementById('age').value
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
    postKoderFetch(newKoder)
     nameKoder=document.getElementById('name').value=''
     lastName=document.getElementById('last-name').value=''
     ageKoder=document.getElementById('age').value=''
     positionKoder=document.getElementById('position').value=''
})


const postKoderFetch=(newKoder)=>{
    fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/.json`,{
        method:'POST',
        body:JSON.stringify(newKoder)
    }).then(result => {
        return result.json()
    }).then(response => {
        console.log('Agregado')
    })   
}


