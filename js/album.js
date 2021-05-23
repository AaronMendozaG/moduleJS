


let request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/albums')

request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            var response  = request
            var objectResponse = JSON.parse(response.responseText)
            let search = window.location.search
    let start = search.indexOf('=') + 1
    let idAlbum = parseInt(search.slice(start))
    let albumObject = objectResponse.filter((album)=> {
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
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()


