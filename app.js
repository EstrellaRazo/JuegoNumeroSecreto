//Variables
let numMax = prompt('¿Entre qué números te gustaría adivinar?');
let maxIntentos = prompt('¿Qué número de intentos te gustaría tener?');
let numSecreto = Math.floor(Math.random()*numMax) + 1;
console.log('Número secreto:', numSecreto);
let numUsuario = 0; //Declaramos pero no le damos valor
let intentos = 1;

while(numUsuario != numSecreto)
{
    numUsuario = parseInt(prompt("Dame un número entre 1 y " + numMax + ", por favor:"));

    console.log('Número del usuario:', numUsuario);

    //Comparación
    console.log('Resultado de la comparación:', numUsuario == numSecreto);
    if (numUsuario == numSecreto)
    {
        alert(`Felicidades, acertaste el número es: ${numUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); //Operador ternario
    }
    else
    {
        console.log('Número secreto:', numSecreto);
        if(numUsuario > numSecreto)
        {
            alert("El número es menor");
        }
        else
        {
            alert("El número es mayor");
        }
        intentos += 1;
        if(intentos > maxIntentos)
        {
            alert("Llegaste al número máximo de " + maxIntentos + " intentos");
            break;
        }
    }
}
alert("Número secreto:" + numSecreto);
