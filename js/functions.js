console.log("Funciones")

// DEFINICION DE LA FUNCION 
   // function myFunction(){
        //Sentencias
   // }

// MANDAR LLAMAR A LA FUNCION
    //myFunction()


    //let stringOne="smtp"
    //let stringTwo="aeiou"
    //
    //function addStrings(strOne,strTwo){
//
    //    for (let i=0;i<strOne.length;i++){
    //        let res=''
    //        for (let j=0;j<strTwo.length;j++){
    //            res+=`${strOne[i]}${strTwo[j]} ;`
    //            
    //        }
    //        console.log(res)
    //    }
    //}
    //
    //addStrings(stringOne,stringTwo)



    //let phrase=window.prompt("Dame una frase y te dire si es palindromo").toLowerCase()
    //
//
    //function checkPalindromo(phraseToCheck) {
    //    let phraseChecked=''
    //    let phraseWhitOutSpaces=''
    //    for (let j=0;j<phrase.length;j++){
    //        if(phrase[j]===' '){
    //            continue
    //        }else{
    //            phraseWhitOutSpaces += phrase[j]
    //        }
    //    }
    //
    //    for (let i=phraseWhitOutSpaces.length-1;i>=0;i--){
    //       phraseChecked += phraseWhitOutSpaces[i]
    //
    //    }
    //
    //       if (phraseChecked===phraseWhitOutSpaces){
    //          return console.log("Es palindromo")
    //       }else{
    //        return console.log("No es palindromo")
    //        }
    //}
    //
    //checkPalindromo(phrase)


    
    function getTable(table) {
        for(i=1;i<=10;i++){
            let resultado=table*i
            console.log(`${table} x ${i} = ${resultado}` )
        }
    }
    let num=parseInt(window.prompt("Ingrese la tabla multiplicar que desea conocer"))
    getTable(num)
    

    //let cal =parseInt(window.prompt("Ingrese la calificacion"));
    // 
    //function getCalif(calInNumber) {
    //   switch (calInNumber){
    //       case 100:
    //           console.log("Tu calificacion es A+")
    //           break
    //       case 90:
    //           console.log("Tu calificacion es A")
    //           break
    //       case 80:
    //           console.log("Tu calificacion es B")
    //           break
    //       case 70:
    //           console.log("Tu calificacion es C")
    //           break
    //       case 50:
    //           console.log("Tu calificacion es E")
    //           break
    //       default:
    //           console.log("Tu calificacion es muy baja")
    //   }
    //    
    //}
    //getCalif(cal)

    //let num=parseInt(window.prompt("Dame un numero"))
//
    //function numInteger(numInteger) {
    //           
    //           while (numInteger>=0) {
    //        
    //               console.log(numInteger)
    //               numInteger=parseInt(window.prompt("Dame otro numero"))
    //               
    //           }
    //        
    //}
    // numInteger(num)
               
     