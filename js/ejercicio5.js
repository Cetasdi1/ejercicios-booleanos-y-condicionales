/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura.
Ejercicios 4
El programa deberá calcular el BMI e imprimir:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/
let peso = parseInt(prompt("ingrese su peso"))
let altura = parseFloat(prompt("ingrese su altura"))
let imc = peso/(altura*altura)
console.log(imc)
if(imc<18.5){
    console.log(`Bajo de peso`)
}else if(imc<24.9){
    console.log(`Normal`)
}else if(imc<=29.9){
    console.log(`Sobrepeso`)
}else{
    console.log("Obeso")
}