/*Escribe un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar.
Si el número es correcto debe imprimir en la consola
"Felicitaciones, ese era!", de lo contrario debe imprimir
"Lo siento, intenta nuevamente!" */
let num = parseInt(prompt("intente adivinar el nuemro"))
function rand(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(rand(1,10)) 

let resu = rand(1,10)

if(resu == num){
    console.log("Felicitaciones, ese era!")
}else{
    console.log("Lo siento, intenta nuevamente!")
}