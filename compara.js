console.log(ComparaNumeros(5, 5));


function ComparaNumeros (num1, num2) {

    if (!num1 && !num2) {return 'Digite dois números!'}

    var message = `Os números ${num1} e ${num2}`;

    message = ComparaNumerosIguais(message, num1, num2)

    message = Soma(message, num1, num2) 
 
    return message; // se uso console.log => mostra a mensagem e depois undefined
}

// Confira se os números são iguais
function ComparaNumerosIguais(message, num1, num2) {
    message = num1 === num2 ?  message = message + " são iguais."  : message = message + " não são iguais." ;   
    return (message);
}


// Confira se a soma dos números é maior que 10 ou menor que 20.
function Soma(message, num1, num2)  {
    var resultComp10 = "";
    var resultComp20 = "";

    let soma = num1 + num2;

    message = message + ` Sua soma é ${soma}, que é `;

    if (soma < 10) {
        resultComp10 =  "menor que 10" ;
    }
    else if (soma > 10) {
        resultComp10 = "maior que 10";
    }
    else if (soma = 10) {
        resultComp10 = "igual a 10";
    }
    
    if (soma < 20) {
        resultComp20 =  "menor que 20" ;
    }
    else if (soma > 20) {
        resultComp20 =  "maior que 20" ;
    }
    else if (soma = 20) {
        resultComp20 = "igual a 20";
    }

   message = message + `${resultComp10} e ${resultComp20}`;
    
   return message;
} 
