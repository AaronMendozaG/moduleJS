let search = window.location.search
let start = search.indexOf('=') + 1
let idKoder = search.slice(start)



const request1 = new XMLHttpRequest()
request1.open('GET','https://python2gtest-default-rtdb.firebaseio.com/koders/.json')
request1.addEventListener('readystatechange', () => {
    if(request1.readyState !== 4) {
        return 
    } else {
        if(request1.status >= 200 && request1.status <= 299){
            const response  = request1
            const objectResponse = JSON.parse(response.responseText)
            let koderObject = Object.entries(objectResponse).filter((koder)=> {
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
            
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request1.send()





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
    const request = new XMLHttpRequest()

 request.open('PUT',`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
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
























