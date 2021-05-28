$(document).ready(function () {
    $('#btn-create-koder').click(()=>{

        let nameKoder=$('#name').val()
            let lastName=$('#last-name').val()
            let ageKoder=$('#age').val()
            let positionKoder=$('#position').val()
        if (nameKoder=='' || lastName == '' || ageKoder=='' || positionKoder=='') {
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
                nameKoder=$('#name').val('')
                lastName=$('#last-name').val('')
                ageKoder=$('#age').val('')
                positionKoder=$('#position').val('')
    
    
    })
    
    
    const postKoderFetch=(newKoder)=>{
        fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/.json`,{
            method:'POST',
            body:JSON.stringify(newKoder)
        }).then(result => {
            return result.json()
        }).then(response => {
            window.alert('KODER AGREGADO')
        }).catch(function(error){
            console.log(error.message)
        })   
    }
    

})




