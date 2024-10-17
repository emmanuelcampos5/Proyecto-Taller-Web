
let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);

let numero3 = 10;
let numero4 = 5;
let resultado = numero1 + numero2;

console.log(resultado);

let edad = 18;
if(edad >= 18){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}

let isMayor;
if(edad >= 18){
    isMayor = true;
}else{
    isMayor = false;
}

console.log(isMayor);

document.getElementById('numero1').innerHTML = (numero1);
document.getElementById('numero2').innerHTML = (numero2);
document.getElementById('resultado').innerHTML = (resultado);

document.getElementById('edad').value = edad;

if(edad >= 18){
    document.getElementById('mensaje1').innerHTML = "Eres mayor de edad";
}

if(isMayor){
    document.getElementById('mensaje2').innerHTML = "Eres mayor de edad";
}

if(edad >= 18){
    document.getElementById('mensaje1').innerHTML = "Eres mayor de edad";
}

if(isMayor){
    document.getElementById('mensaje2').innerHTML = "Eres mayor de edad";
}

document.getElementById('contenedor').innerHTML = '<button style="color:white">Guardar</button>';



