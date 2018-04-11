/*-[ ] prompt('string')

-[ ] function cipher(st, n);

-[ ] validacion de string

-[ ] for (var i =0 ; i <= string.length ; i++ )

-[ ] var string2  = input.charCodeAt(i); // esta debera guardar los resultados

-[ ] var Decipher2 = (string - 65 + n(<- numero fijo en este caso 33))%26 + 65

-[ ] for (var e = 0; e  <= string2.length; e++);

-[ ] var resultDecip= resultDecipher.fromCharCode(e);

-[ ] var array = resultDecipher.push()

-[ ] var result = array.join('')*/

var n = 33 ;
var upperCaseA = 65;
var upperCaseZ = 90;
var lowerCasea = 97;
var lowerCasez = 122;

var str = prompt("Ingresa la  palabra a cifrar \n **RECUERDA, no uses espacios, ni caracteres extraños "); //Pide palabra

function validateInput(str){
  while(str === ""){
    str = prompt("Ingresa una cadena valida");
  }

  for(var i = 0; i < str.length; i++ ){
    var characterCode = str.charCodeAt(i);
    if((characterCode < upperCaseA && characterCode > upperCaseZ) || (characterCode < upperCaseA && characterCode > upperCaseZ)){
      str = prompt("Ingresa una cadena valida");// si no cumple
    }//if

  }//for validate

}// fin de funcion validateInput

  function cipher(str , n){
      var stringCipher = "";
      for (var i = 0; i < string.length; i++) {
          var ciphered  = (string.charCodeAt(i)- 65 + n ) % 26 + 65 ;
      stringCipher = string.fromCharCode(ciphered );  // se puede usar += ?
    }//for
    return cipher(str,n);
  }// funcion cipher


  function descipher(str){
      for (var e = 0 ; e <= str.length; e++ ){
      var deciphered = str.fromCharCode(e);
      var array = deciphered.push();
      var result = array.join("");

    }//Decipher for
      return result;

}// funcion decipher

console.log(descipher(str));
