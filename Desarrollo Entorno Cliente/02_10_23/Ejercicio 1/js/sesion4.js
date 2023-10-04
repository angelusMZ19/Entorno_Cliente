//escribir funciones para ejecurar y encontrar el numero mas cercano al 100

function escribe(){
    let a= parseInt(prompt("Dame el primer numero"));
    let b= parseInt(prompt("Dame el segundo numero"));

    console.log(encuentra(a, b));
}

function encuentra(a, b){
let resA= Math.abs(100- a);
let resB= Math.abs(100- b);

    if(resA<resB){
        console.log("El numero mas cercano al 100 es:   " + a);
    }else{
        console.log("El numero mas cercano al 100 es:   "+ b);    
    }
}