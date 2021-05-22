console.log('Eventos')
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
    },
    {
        id: 20,
        name:'rose'
    }

]


let listKoders = [...koders]
let enrolledKoders = [{
    id: 234,
    name:'Yair'
}]

// print table koders

const printTableKoders = (arrKoders, selector, type) => {
    // temp
    let accKodersList = ''
    arrKoders.forEach(( koder, index) => {
        if(type === 'list'){
            accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button class="btn btn-primary enrolledKoderButton" data-id="${koder.id}" data-index="${index}">Inscribir</button>
                </td>
            </tr>
            `
        } else {
            accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button class="btn btn-warning removeKoderButton" data-id="${koder.id}" data-index="${index}">Dar de baja</button>
                </td>
            </tr>
            `
        }   
    })
    // DOM
    let sel = document.querySelector(selector)
    sel.innerHTML = accKodersList
} 

const updateTable = () => {
    printTableKoders(listKoders, '.table__koders tbody', 'list')
    printTableKoders(enrolledKoders, '.table__kodersEnrrolled tbody', 'enrolled')
}

let wrappKoderList = document.querySelector('.table__koders tbody')
wrappKoderList.addEventListener('click', (event) => {
    if( event.target.classList.contains('enrolledKoderButton') ) {

        let idKoder = parseInt(event.target.dataset.id)

        let koderItem = listKoders.filter(koder => koder.id === idKoder )
        enrolledKoders.push(koderItem[0])

        let kodersNotDeleted = listKoders.filter(koder => koder.id !== idKoder)
        listKoders = [...kodersNotDeleted]

        updateTable()
    }
})



let wrappKoderEnrrolled = document.querySelector('.table__kodersEnrrolled tbody')
wrappKoderEnrrolled.addEventListener('click', (element) => {
    console.log(element.target.classList)
    if(element.target.classList.contains('removeKoderButton')) {
        let idKoder = parseInt(element.target.dataset.id)
        
        let enrrolledKoder = enrolledKoders.filter( koder => koder.id == idKoder )
        let newdataEnrrolledKoder = enrolledKoders.filter( koder => koder.id !== idKoder )

        listKoders.push(enrrolledKoder[0])
        enrolledKoders = [...newdataEnrrolledKoder]
        
        updateTable()
    }
})

let btnLimpiar=document.querySelector('.btn-limpiar')
btnLimpiar.addEventListener('click',()=>{
    //listKoders= listKoders.concat(enrolledKoders)
    listKoders= [...listKoders,...enrolledKoders]
    enrolledKoders=[]
    updateTable()
})
let btnMostrar=document.querySelector('.btn-mostrar')
btnMostrar.addEventListener('click',()=>{
    
    updateTable()
})

const addNewKoder=()=>{
    
    let idKoder=parseInt(document.querySelector('#idkoder').value)
    let nameKoder=document.querySelector('#namekoder').value
    if (idKoder=== "") {
        window.alert("Escriba un ID de Koder")
        return
    } else if (nameKoder === "") {
        window.alert("Escriba el nombre del  Koder")
        return
    }
    var newKoder= {id:idKoder,name:nameKoder}
    
    for (let i = 0; i < listKoders.length; i++) {
        if (newKoder.id===listKoders[i].id) {
            return window.alert(`NO SE PUEDE AGREGAR KODER, EL ID ${newKoder.id} YA EXISTE`)
        }
    }
    listKoders.push(newKoder)
    updateTable()

    //listKoders.push(newKoder)
    //console.log(listKoders)
    //updateTable()
    //window.alert(`Se agrego de manera correcta el USUARIO:${nameKoder} con el ID:${idKoder}`)
 
}

let addKoder=document.querySelector('.add-koder')
addKoder.addEventListener('click', (event)=>{
    event.preventDefault()
    addNewKoder()
})
 
