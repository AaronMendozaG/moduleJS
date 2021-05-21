console.log('Eventos')

// addEventListener
// preventDefault()
// stopPropagation()





// events

// click

// const funcionDeClick = () => {
//     console.log('click desde event listener')
// }
// buttonClick.addEventListener('click', funcionDeClick)

//let buttonClick = document.getElementById('eventlistener')
//
//buttonClick.addEventListener('click', () => {
//    console.log('click desde event listener')
//})
//
//buttonClick.addEventListener('focus', () => {
//    console.log('focus desde event listener')
//})
//
//buttonClick.addEventListener('mouseenter', () => {
//    console.log('mouseenter desde event listener')
//})
//
//buttonClick.addEventListener('mousemove', () => {
//    console.log('mousemove desde event listener')
//})
//
//buttonClick.addEventListener('mouseleave', () => {
//    console.log('mouseleave desde event listener')
//})


// keyboard events

// inputSearch.addEventListener('keydown', function(){
//     console.log('keydown')
// })
// inputSearch.addEventListener('keypress', function(){
//     console.log('keypress')
// })

//let inputSearch = document.getElementById('search')
//let textSearch = document.getElementById('searchtext')
//inputSearch.addEventListener('keyup', function(){
//    let text = inputSearch.value
//    textSearch.innerText = text 
//})





// keydown -> al presionar
// keypress -> al llegar al tope de la tecla
// keyup -> al soltar la tecla



let koders = [
    {
        id: 23,
        name:'jorge'
    },
    {
        id: 31,
        name:'Antonio'
    },
    {
        id: 212,
        name:'fer'
    }

]
let listKoders = [...koders]
let enrolledKoders = [
    {
        id: 20,
        name:'rose'
    }]

// print table koders

const printTableKoders = (arrKoders, selector, type) => {
    let accKodersList = ''
    arrKoders.forEach((koder,index) => {

        if(type === 'list'){
            accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button class="btn btn-primary " onclick="enrolledkoder(${koder.id}) data-id="${koder.id} data-index="${index}">Inscribir</button>
                </td>
            </tr>
            `
        } else {
            accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button onclick="removekoder(${koder.id})">Dar de baja</button>
                </td>
            </tr>
            `
        }   
    })
    // DOM
    let sel = document.querySelector(selector)
    sel.innerHTML = accKodersList
} 


//const enrolledkoder = (idKoder) => {
//    // get koder data
//    let koderItem = listKoders.filter(koder => {
//        if(koder.id === idKoder){
//            return koder
//        }
//    })
//    enrolledKoders.push(koderItem[0])
//    console.log(koderItem)
//
//    // filter array without koder
//    let kodersNotDeleted = listKoders.filter(koder => {
//        if(koder.id !== idKoder){
//            return koder
//        }
//    })
//    console.log(kodersNotDeleted)
//    listKoders = [...kodersNotDeleted]
//
//    // lista de koders lado izquierdo
//    console.log(listKoders)
//    // lista de koders lado derecho
//    console.log(enrolledKoders)
//
//    printTableKoders(listKoders, '.table-postulados tbody', 'list')
//    printTableKoders(enrolledKoders, '.table-inscritos tbody', 'enrolled')
//}
//
//
//const removekoder = (idKoder) => {
//    // su codigo aquí
//    // get koder data
//    let koderItemTwo = enrolledKoders.filter(koder => {
//        if(koder.id === idKoder){
//            return koder
//        }
//    })
//    listKoders.push(koderItemTwo[0])
//    
//
//   // filter array without koder
//   let kodersNotDeletedTwo = enrolledKoders.filter(koder => {
//       if(koder.id !== idKoder){
//           return koder
//       }
//   })
//   enrolledKoders = [...kodersNotDeletedTwo]
//
//    // lista de koders lado izquierdo
//    console.log(listKoders)
//    // lista de koders lado derecho
//    console.log(enrolledKoders)
//
//    printTableKoders(listKoders, '.table-postulados tbody', 'list')
//    printTableKoders(enrolledKoders, '.table-inscritos tbody', 'enrolled')
//
//
//}

printTableKoders(listKoders, '.table-postulados', 'list')
printTableKoders(enrolledKoders, '.table-inscritos tbody', 'enrolled')




