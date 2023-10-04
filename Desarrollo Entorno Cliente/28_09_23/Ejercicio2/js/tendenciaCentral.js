/*Actividad2
pedir 3 numeros
Mostrar la media, mediana, major y menor  */

function escribe(){
    let a= parseInt(prompt("Introduce el primer valor"));
    let b= parseInt(prompt("Introduce el segundo valor"));
    let c= parseInt(prompt("introduce el tercer valor"));
        console.log(calcularEstadisticas(a,b,c));
        
}

function calcularEstadisticas(a, b, c) {
    // Calcular la media
    const media = (a + b + c) / 3;

    // Encontrar el valor mayor y menor
    const mayor = Math.max(a, b, c);
    const menor = Math.min(a, b, c);

    // Calcular la mediana (en este caso, la mediana es simplemente el 
    //valor intermedio)
    let numOrden = [a, b, c];
    numOrden.sort((x, y) => x - y);
    const mediana = numOrden[1];

        console.log('Media:'+ media);
        console.log('Mediana:'+ mediana);
        console.log('Mayor:'+ mayor);
        console.log('Menor:'+ menor);


}