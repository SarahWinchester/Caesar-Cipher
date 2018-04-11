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
var string = prompt("Ingresa la  palabra a cifrar \n **RECUERDA, no uses espacios, ni caracteres extraños ");
 if (string !== '' && string.replace(/[0-9]/g,'') !== string){  // Se necesita llamar funcion aqui?
   cipher(string);

 }else{
    alert ("Error, favor de ingresar nuevamente");
      string = prompt("Ingresa la  palabra a cifrar \n **RECUERDA, no uses espacios, ni caracteres extraños ");

   }//else

   Function cipher(string, n){
      var stringCipher = "";
      for (var i = 0; i < string.length; i++) {
          var ciphered  = (string.charCodeAt(i)- 65 + n ) % 26 =65 ;
      stringCipher +s= string.fromCharCode(ciphered );  // se puede usar += ?
    }//for
    return stringCipher;
  }// funcion cipher
