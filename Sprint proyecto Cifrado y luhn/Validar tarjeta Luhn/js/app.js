var input = prompt("Ingresa los numeros de tu tarjeta \n No debes ingresar espacios ni caracteres extraños");
for (var i = 0; i < input.length; i++) {
  while (input[i] === " " || isNaN(input) || input.length === 0 || input === null || input.length !== 16) {
    input = prompt("Ingresa los numeros digitos de tu tarjeta \n Recuerda que no debes ingresar espacios ni caracteres que no sean numeros";
    } //while
  } //for
  function isValidCard(input) {
    var strInput = input.toString();
    var arrayInput = strInput.split("");
    var yarra = arrayInput.reverse();
    var result;
    yarra.unshift('str');

    for (var a = 1; a < yarra.length; a++) {
      var noParInput = 0;
      var input2 = 0;
      var inputPar2 = 0;
      if (a % 2 !== 0) {
        result += yarra[a];
      } else {
        if (a % 2 === 0) {
          if (yarra[a] * 2 > 10) {
            (yarra[a] - 10) + 1;
            input2 += yarra[a];
          } //if
          else {
            inputPar2 += (yarra[a] * 2);
          }
        }
        result = noParInput + input2 + inputPar2;
      }

      if (result % 10 === 0) {
        alert("Tu tarjeta es Valida");
      } else {
        alert("Tu tarjeta no es Valida");
      }
    }
    isValidCard(input);
