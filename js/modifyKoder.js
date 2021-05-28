$(document).ready(function () {

    let search = window.location.search
    let start = search.indexOf('=') + 1
    let idKoder = search.slice(start)
    
    
    
    const getAllKodersFetch = () => {
        // GET

        $.get('https://python2gtest-default-rtdb.firebaseio.com/koders.json', function (response){
        console.log(response)
        let koderObject = Object.entries(response).filter((koder)=> {
            if(koder[0] === idKoder){
                return  koder
            }
        })[0][1]
        let koderKey = Object.entries(response).filter((koder)=> {
            if(koder[0] === idKoder){
                return  koder
            }
        })[0]
        const printKoder = (objkoder,koderKey) => {
            let {name,lastName,age,position}= objkoder
            $('#id-koder').val(koderKey[0])
            $('#name').val(name)
            $('#last-name').val(lastName)
            $('#age').val(age)
            $('#position').val(position)
        }
        
        printKoder(koderObject,koderKey)
    })    
    }
    getAllKodersFetch()
    
     $('#btn-modify-koder').click(()=>{
        let nameKoder=$('#name').val()
        let lastName=$('#last-name').val()
        let ageKoder=$('#age').val()
        let positionKoder=$('#position').val()
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
            window.alert('KODER MODIFICADO CORRECTAMENTE')
        }).catch(function(error){
            console.log(error.message)
        })    
    }



 })



























