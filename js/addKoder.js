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
    const request = new XMLHttpRequest()

 request.open('POST','https://python2gtest-default-rtdb.firebaseio.com/koders/.json')
 request.addEventListener('readystatechange', () => {
     if(request.readyState !== 4) {
         return 
     } else {
         if(request.status >= 200 && request.status <= 299){
             const response  = request
             const objectResponse = JSON.parse(response.responseText)
             console.log(objectResponse)
         } else {
             console.log('No se pudo ejecutar')
         }
     } 
 })
 request.send(
     JSON.stringify(newKoder)
 )

})


