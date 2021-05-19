console.log ("DOM")

//DOCUMENT OBJECT MODEL (document)
let listKoders=''
let koders = ['antonio', 'victor', 'rose', 'jorge']
let lista = document.querySelector('.table-arr tbody')
koders.forEach( (namekoder, index) => {
  listKoders += `
  <tr><th scope="row">${index+1}</th>
  <td>${namekoder}</td></tr>
      
  `
})
lista.innerHTML = listKoders



let kodersObject  = [
  {
      name: 'Aaron',
      lastName: 'Mendoza',
      age: 30,
      github:'@fdsfsdf'
  },
  {
      name:'Carlos',
      lastName:'Alcibar',
      age: 30,
      github:'@dsfdsf'
  },
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
  ,
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
  ,
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
  ,
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
  ,
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
  ,
  {
      name:'Ferdinand',
      lastName:'Bracho',
      age: 30,
      github:'@sdfdsfds'
  }
]

let listaTwo = document.querySelector('.table-object tbody')
let listKodersTwo=''
kodersObject.forEach((item,index)=>{
  let {name, lastName,age,github} = item
  listKodersTwo += `
  <tr class="table-info">
  <th scope="row ">${index+1}</th>
  <td>${name}</td>
  <td>${lastName}</td>
  <td>${age}</td>
  <td>${github}</td>
  </tr>
      
  `
})
listaTwo.innerHTML = listKodersTwo