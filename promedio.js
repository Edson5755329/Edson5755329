function promedio2(a,b,c){
    const aa=parseFloat(a);
    const bb=parseFloat(a);
    const cc=parseFloat(a);
    return (aa+bb+cc)/3;
 }
function calcularPromedioAritmetica(){
    const vr1 = document.getElementById("t1"); 
    const valor = vr1.value;
    const vr2 = document.getElementById("t2"); 
    const valor2 = vr2.value;
    const vr3 = document.getElementById("t3"); 
    const valor3 = vr3.value;
    const promedio = promedio2(valor,valor2,valor3);
    const resultado = document.getElementById("Promedio");
    resultado.innerText = `El promedio es : ${promedio}`;
}
function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        });
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}
function calcularMediaArmonica(){
   
        const sumaLista1=lista.reduce(
            function(valorAcumulado=0,nuevoElemento){
             return (1/valorAcumulado)+(1/nuevoElemento);
            });
       
        const mediaArmonica=lista.length/sumaLista1;
             return mediaArmonica;
}

function calcularMediaGeometrica(){
   
    
    const multiLista=lista.reduce(
            function(valorAcumulado=0,nuevoElemento){
             return valorAcumulado*nuevoElemento;
            });
    const mediaArmonica=Math.pow(multiLista,(1/lista.length));
         return mediaArmonica;
}
