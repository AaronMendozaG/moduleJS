/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */

//let phrase=window.prompt("Dame una frase y te dire si es palindromo").toLowerCase()
//let phraseChecked=''
//let phraseWhitOutSpaces=''
//
//for (let j=0;j<phrase.length;j++){
//    if(phrase[j]===' '){
//        continue
//    }else{
//        phraseWhitOutSpaces += phrase[j]
//    }
//}
//
//for (let i=phraseWhitOutSpaces.length-1;i>=0;i--){
//   phraseChecked += phraseWhitOutSpaces[i]
//    
//}
//
//   if (phraseChecked===phraseWhitOutSpaces){
//      console.log("Es palindromo")
//   }else{
//    console.log("No es palindromo")
//    }

/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/
let asterisc=""
let num=parseInt(window.prompt("Dame un numero"))
let asteriscNew=""

for (let i=0;i<num;i++){
    
    asterisc= asterisc + "*"
    
    
    if (asterisc.length!=num+1) {
        console.log(asterisc)
    }else{
        console.log(asterisc.length-1)
    }
   
}
