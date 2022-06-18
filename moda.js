function calcularFrecuencia(numero, vector){
    var num_veces=0
    for (var pos in vector) {
        if (vector[pos]==numero) {
            num_veces++
        }
    }
    return num_veces
}

/* Dado un vector de números se nos devuelve la posición
 * del número mayor*/
function obtenerPosMayor(vector_valores){
    var posMayor=0
    var numMayor=vector_valores[0]
    for (var pos in vector_valores){
        if (vector_valores[pos]>numMayor) {
            numMayor=vector_valores[pos]
            posMayor=pos
        }
    }
    return posMayor
}
/* Función que devuelve el número "moda" de un vector*/
function obtenerModa(vector_valores){
    var frecuencias=new Array(vector_valores.length)
    for (var pos in vector_valores){
         var numero=vector_valores[pos]
         frecuencias[pos]=calcularFrecuencia    (numero, vector_valores)
    }
    var posModa=obtenerPosMayor(frecuencias)
    if (vector_valores[posModa].length == vector_valores.length)
  console.log("No hay moda");
else
console.log("La moda de la distribución es " + vector_valores[posModa]);
    return vector_valores[posModa]

}
