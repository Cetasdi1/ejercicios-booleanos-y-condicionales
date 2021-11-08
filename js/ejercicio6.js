/*Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola "Múltiplo de 3".
Si el número es múltiplo de 5 debe imprimir en la consola "Múltiplo de 5".
Si el número es múltiplo tanto de 3 como de 5
debe imprimir en la consola "Múltiplo de 3 y de 5".
Si no cumple ninguna de las condiciones anteriores debe imprimir
"No es múltiplo ni de 3 ni de 5" */
let num = parseInt(prompt("Ingrese un numero"))
if(num % 3 == 0){
    if(num % 5 == 0){
        console.log(`${num} es multiplo de 3 y de 5`)
    }else{
        console.log(`${num} es multiplo de 3`)
    }
}else if(num % 5 == 0){
        console.log(`${num} es multiplo de 5 y de 3`)
}else{
    console.log(`${num} no es múltiplo ni de 3 ni de 5`)
}
