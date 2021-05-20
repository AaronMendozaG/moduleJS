/**
 * Ejercicio 1
 * Dado el siguiente array de objetos generar
 * Funcion que pinte mi lista de deseos
 * Funcion que ordene por id mi lista de deseos
 * Funcion que ordene por nombre de producto mi lista de deseos
 * Funcion que ordene por precio mi lista de deseos
 */

 let wishList = [
    {
        iditem : 3,
        name : 'Nike Carreras',
        description : 'Nike Carreras de mujer',
        price : 1200,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 1,
        name : 'Adidas Grand Court',
        description : 'Adidas Grand Court Base EE7905 Tenis para Hombre',
        price : 859,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    
    {
        iditem : 2,
        name : 'Nike Metcon',
        description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price : 990,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    }
    
]

let wishListDOM= document.querySelector('.table-wishList tbody')
let listWhisList=''

const createWishList=arr=>{
    wishList.forEach((item,index)=>{
        let {iditem,name,description,price,imgurl}=item
        listWhisList+=`
        <tr >
        <th scope="row" class="align-middle">${iditem}</th>
        <td class="align-middle">${name}</td>
        <td class="align-middle">${description}</td>
        <td class="align-middle"><span>$</span>${price}</td>
        <td class="align-middle"><img src="${imgurl}" alt=""></td>
        </tr>
        `
    })
    wishListDOM.innerHTML = listWhisList
}

const sortWishListID=arr=>{
    return arr.sort((a,b)=>{
        if (a.iditem>b.iditem) {
            return 1
        }else if (a.iditem<b.iditem) {
            return -1
        }
        return 0
    })
}
const sortWishListName=arr=>{
    return arr.sort((a,b)=>{
        if (a.name>b.name) {
            return 1
        }else if (a.name<b.name) {
            return -1
        }
        return 0
    })
}
const sortWishListPrice=arr=>{
    return arr.sort((a,b)=>{
        
        return a.price-b.price
    })
}


//createWishList(wishList)
//reateWishList(sortWishListID(wishList))
//createWishList(sortWishListName(wishList))
createWishList(sortWishListPrice(wishList))
