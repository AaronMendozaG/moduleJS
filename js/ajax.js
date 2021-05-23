console.log('ajax')
/**
 * AJAX. Asyncronous Java Script And XML
 * JSON
 * XHR -> xmlhttprequest
 * Fetch
 */


// Instanciarlo
// Abrir la conexion
// Enviar la petición

const printPosts = (arr) => {
    let acc = ''
    arr.forEach(post => {
        acc += `
        <li class="list-group-item d-flex justify-content-between">
            <p class="pr-4">${post.id}</p> <br>
            <p class="pr-4">${post.title}</p>
            <p class="pr-4">${post.body}</p>
            <a href="/post.html?idpost=${post.id}" class="pr-4">Ver post</a>
            
        </li>
        `
    });
    let list__koders = document.querySelector('.list__koders')
    list__koders.innerHTML = acc
}

const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/posts/')
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
            printPosts(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()
