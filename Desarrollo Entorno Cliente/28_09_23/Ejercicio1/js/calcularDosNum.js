/*se debe calcular de dos maneras:
 una con la libreria math de javascript
 y la otra con un bucle*/

function escribe(){
    let base = prompt("introduce el numero base ");
    let indice = prompt("introduce el numero del indice");
    console.log(Mathe(base, indice));
  
}

function Mathe(base, indice){
    console.time("Tiempo_total")
    let resultado= Math.pow(base, indice);
    console.log(resultado)
    console.timeEnd("Tiempo_total")

}

function danburi(){
    console.log("funciona el write")
    let a = prompt("introduce el numero base ");
    let b = prompt("introduce el numero del indice");
    console.log(bucle(a,b));

}
function bucle(a,b){
    console.time("total_bucle: ");
    let res;
    for(let i= 1; i<=b; i++){
        a=a*a;
    }
    console.log(a);
    console.timeEnd("total_bucle: ");
    
}