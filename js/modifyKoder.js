$('#btn-modify-koder').click(()=>{
    let nameKoder=$('#name').val()
    let lastName=$('#last-name').val()
    let ageKoder=parseInt($('#age').val())
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
 
    //putKoderAjaxJquery(idKoder,newKoder)
    putKoderAjaxJquery(idKoder,newKoder)


 })

 //EDIT KODER FETCH
// const putKoderFetch= (idKoder,newKoder)=>{
//     fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,{
//         method:'PUT',
//         body:JSON.stringify(newKoder)
//     }).then(result => {
//         return result.json()
//     }).then(response => {
//         window.alert('KODER MODIFICADO CORRECTAMENTE')
//     }).catch(function(error){
//         console.log(error.message)
//     })    
// }


//EDIT KODER JQUERY
// const putKoderAjaxJquery= (idKoder,newKoder)=>{

    // $.ajax({
    //     url: `https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
    //     method:'PUT',
    //     data: JSON.stringify(newKoder),
    //     dataType: '',
    //     success: function(response) {
    //         window.alert('KODER MODIFICADO CON EXITO')
    //     },
    //     error: function(xhr){
    //         console.log(xhr)
    //     },
    //     complete: function(xhr){
    //         // console.log(xhr)
    //     },
    // })
// }









$(document).ready(function () {
    //OBTENER ID DE  FORMA TRADICIONAL, CON EL ARRAY OBTENIDO DEL SEARCH
    // let search = window.location.search
    // let start = search.indexOf('=') + 1
    // let idKoder = search.slice(start)

    const params = new URLSearchParams(window.location.search)
    let idKoder = params.get('id')
    
    
    
    // const getAllKodersFetch = () => {
    //     // GET

    //     $.get('https://python2gtest-default-rtdb.firebaseio.com/koders.json', function (response){
        // let koderObject = Object.entries(response).filter((koder)=> {
        //     if(koder[0] === idKoder){
        //         return  koder
        //     }
        // })[0][1]
        // let koderKey = Object.entries(response).filter((koder)=> {
        //     if(koder[0] === idKoder){
        //         return  koder
        //     }
        // })[0]
        // const printKoder = (objkoder,koderKey) => {
        //     let {name,lastName,age,position}= objkoder
        //     $('#id-koder').val(koderKey[0])
        //     $('#name').val(name)
        //     $('#last-name').val(lastName)
        //     $('#age').val(age)
        //     $('#position').val(position)
        // }
        
        // printKoder(koderObject,koderKey)
    // })    
    // }
    // getAllKodersFetch()

    async function getAllKodersFetchAsync(){
        try {
    
            let koders = await $.get('https://python2gtest-default-rtdb.firebaseio.com/koders.json')
            let koderObject = Object.entries(koders).filter((koder)=> {
                if(koder[0] === idKoder){
                    return  koder 
                }
            })[0][1]
            let koderKey = Object.entries(koders).filter((koder)=> {
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
            
    
        } catch (error) {
            console.log(error)
            console.log(error.message)
        }
        
        // console.log(posts,comments,albums)
    }
    getAllKodersFetchAsync()
    
     

    //ASYNC AWAIT
    async function putKoderAjaxJquery (idKoder,newKoder){
        try {
    
            let koders = await $.ajax({
                url: `https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
                method:'PUT',
                data: JSON.stringify(newKoder),
                dataType: '',
                success: function() {
                    window.alert('KODER MODIFICADO CON EXITO')
                },
                error: function(xhr){
                    console.log(xhr)
                },
                complete: function(xhr){
                    // console.log(xhr)
                },
            })
            return koders
    
        } catch (error) {
            console.log(error)
            console.log(error.message)
        }
        
        // console.log(posts,comments,albums)
    }
    
    



 })



























