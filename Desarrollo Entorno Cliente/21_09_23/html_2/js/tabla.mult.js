//practica de console con la tabla de multiplicar
function escribe(){
    let num = prompt("introduce un numero entre 1 y el 10");
    if(num>=1 && num<=10){
        console.log("La tabla de multiplicar del " + `${num}`);
        console.log(calcula(num));
    }else{
        console.log("Intentelo de nuevo con un valor dentro del rango");
    }
}

function calcula(num){
    for( let numero = 1; numero<= 10; numero++){
    let x= numero * num;
    console.log( `${num}` + "x" + `${numero}` +": "+ `${x}` );
    }
}
