
$(()=> { 

    const printKoder = (arr) => {
        let acc = ''
        arr.forEach((koder,index) => {
            acc += `
            <tr>
            <td scope="row">${index+1}</td>
            <td>${koder[1].name}</td>
            <td><a href="/modifyKoder.html?id=${koder[0]}" type="button" class="btn btn-outline-warning pr-4">Editar</a></td>
            <td><a href="" type="button" class="btn btn-outline-danger pr-4 deletekoder"  data-id="${koder[0]}">Eliminar</a></td>
            </tr>
            `
        });
        
        $('.table tbody').html(acc)
        
    }
    
    
    
   
    
    
    
    const getAllKodersFetch = () => {
    //    // GET
    //    fetch('https://python2gtest-default-rtdb.firebaseio.com/koders/.json').then(result => {
    //        //ME REGRESA UN OBJETO EN STRING Y SE PARSEA A UN OBJETO
    //        return result.json()
    //    }).then(response => {
    //        //COMO ME REGRESA UN OBJETO, SE COMBIERTE A UN ARRAY CON .entries
    //        printKoder(Object.entries(response))
    //    }).catch(function(error){
    //        console.log(error.message)
    //    })    
    $.get('https://python2gtest-default-rtdb.firebaseio.com/koders.json', function (response){
        if (response != null) {
            printKoder(Object.entries(response)) 
        }
         
    })
    }
    
    getAllKodersFetch()
    
    const deleteKoderFetch=(idKoder)=>{
        //METODO DE ELIMINAR, OBTIENE EL ID DEL KODER
        fetch(`https://python2gtest-default-rtdb.firebaseio.com/koders/${idKoder}.json`,{
            method:'DELETE'
        }).then(result => {
            return result.json()
        }).then(response => {
            window.alert('ELIMINADO CON EXITO')
            //SE RECARGA LA PAGINA CADA QUE SE ELIMINE
            window.location.reload()
            
        }).catch(function(error){
            console.log(error.message)
        })      
    }
    // $('.list-koders tbody').click((e)=>{
    //     if(e.target.classList.contains('deletekoder')) {
    //         e.preventDefault()
    //         let idkoder = e.target.dataset.id
    //         deleteKoderFetch(idkoder)
    //     }
    // })
    $('.list-koders tbody').on('click','.deletekoder',function(e){
        e.preventDefault()
        let idkoder=$(this).attr('data-id')
        deleteKoderFetch(idkoder)
    })

})











 


        
        
    






