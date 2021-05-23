const printAlbums = (arr) => {
    let acc = ''
    arr.forEach(post => {
        acc += `
        <tr>
        <td scope="row">${post.id}</td>
        <td>${post.title.toUpperCase()}</td>
        <td><a href="/album.html?id=${post.id}" class="btn btn-outline-info pr-4">Ver Album</a></td>
        
        </tr>
        
        `
    });
    let list__album = document.querySelector('.table tbody')
    list__album.innerHTML = acc
    
}


if (window.location.pathname === "/listAlbum.html" || window.location.pathname === "/album.html") {
    const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/albums')
request.addEventListener('readystatechange', () => {
    getArr(request)
    getArr2(request)
})
request.send()
}










const getArr=(request)=>{
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299 ){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            
            //console.log(response.responseText)
            //console.log(objectResponse)
            printAlbums(objectResponse)
            
        }
        else {
            console.log('No se pudo ejecutar')
        }
    } 
    

}
const getArr2=(request)=>{
    if (window.location.pathname === "/album.html"){
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299 ){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                
                
                printAlbum(objectResponse)
            }
            else {
                console.log('No se pudo ejecutar')
            }
        } 
    }
    
    

}

const printAlbum=arr=>{
    if (window.location.pathname === "/album.html") {
        let search = window.location.search
        let start = search.indexOf('=') + 1
        let idAlbum = parseInt(search.slice(start))
        let albumObject = arr.filter((album)=> {
            if(album.id === idAlbum){
                return  album
            }
        })[0]
        
        const printAlbum= (objAlbum) => {
            let {id,title}= objAlbum
            document.querySelector('.album-number').innerText = id
            document.querySelector('.album-title').innerText = title
            
        }
        
        printAlbum(albumObject)
    }
        
        
    
}





