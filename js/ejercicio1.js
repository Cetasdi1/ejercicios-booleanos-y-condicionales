/*Escribe un programa que le pida un número al usuario e imprima en la
consola si el número es mayor o menor/igual a 10.
Si es mayor debe imprimir "El número es mayor a 10".
Si es menor debe imprimir "El número es menor o igual a 10".*/
let num1 = prompt("ingrese un numero")

if(num1>10){
    console.log(`El número ${num1} es mayor a 10`)
}else{
    console.log(`El número ${num1} es menor o igual a 10`)
}