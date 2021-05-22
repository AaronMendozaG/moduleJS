console.log('BOM')
// DOM -> Document Object Model
// BOM -> Browser Object Model

// window
//     document // DOM

//     location // Bom
//     navigator // Bom
//     history // Bom

let koders = [
    {
        id: 1,
        bio: 'lorem lorem lorem lorem',
        git: '/dered-dev',
        imgkoder:'https://placeimg.com/640/480/any'
    },
    {
        id: 2,
        bio: 'lorem lorem lorem lorem',
        git: '/rose-dev',
        imgkoder:'https://placeimg.com/640/480/any'
    }   
]

// console.log(koders)
// http://127.0.0.1:5500/?idkoder=233443


let listKoder=[...koders]




let listKodersDOM=document.querySelector('.koders-list')
if (listKodersDOM) {
    let listKoders=''
    listKoder.forEach((item)=>{
        listKoders+=`
        <a href="/koder.html?idkoder=${item.id}">
            <li class="list-group-item list-group-item-dark" >
            Koder ${item.id}
            </li>
        </a>
        
        `
    });
    listKodersDOM.innerHTML = listKoders
}



if (window.location.pathname === "/koder.html") {
    let search = window.location.search
let start = search.indexOf('=') + 1
let idkoder = parseInt(search.slice(start))
let koderObject = koders.filter((koder)=> {
    if(koder.id === idkoder){
        return  koder
    }
})[0]

const printKoder = (objkoder) => {
    let {id, bio,git,imgkoder}= objkoder
    document.querySelector('.card-title').innerText = id
    document.querySelector('.card-text').innerText = bio
    document.querySelector('.btn-primary').innerText = git
    document.querySelector('.btn-primary').setAttribute('href',`https://github.com${git}`)
    document.querySelector('.btn-primary').setAttribute('target','_blank')
    document.querySelector('.card-img-top').setAttribute('src',`${imgkoder}`)
}

printKoder(koderObject)
    
}




