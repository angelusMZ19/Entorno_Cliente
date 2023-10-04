//sepia de fivonachi
//todas las actividades de clase son de entrega obligatoria
function escribe(){
    let num = prompt("introduce un numero porfavor");
    console.log(sepia(num));
}

function sepia(num){
    const espiral= [0, 1];
    for(let orden=0; orden<=num ; orden++){
        
            espiral[orden]= espiral[espiral.length-2]+ espiral[espiral.length-1];

    console.log( "fibo[" + `${orden}` + "]" + "= "+ `${espiral[orden]}`);
    }
}






