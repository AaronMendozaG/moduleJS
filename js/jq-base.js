console.log('JQUERY CLASS')
//Hasta que cargue el documento
$(document).ready(function () { 
    console.log('Documente ready')
    //SENTENCIAS DE MI PAGINA 
    //PETICIONES AJAX
    //DOM MANIPULATION
    //EFFECTS
    //TRAVERSION
//  $('.container > div').addClass('list')
//  $('ol li').addClass('list-item')
for (let i = 0; i < 10; i++) {
    $('div ol').append('<li></li>')
    $('div ul').prepend('<li></li>')
    
}




})

//shorthand
// $(function () { 
//     console.log('Document ready')
//     //SENTENCIAS DE MI PAGINA 
//     //PETICIONES AJAX
//     //DOM MANIPULATION
//     //EFFECTS
//     //TRAVERSION
// })