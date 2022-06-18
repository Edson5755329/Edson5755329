
function obtenerMediana(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    numeros = numeros.sort((x, y) => x - y);
    
    let mitad = Math.floor(numeros.length / 2);

    return numeros.length % 2 == 1 ? numeros[mitad] : (numeros+1) / 2;
}

try {
    console.log(obtenerMediana([10, 12, 100, 2, -10])); // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMediana({a: 1})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMediana([10, 12, 100, 'a', -10])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}