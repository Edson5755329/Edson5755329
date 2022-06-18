// Codigo del cuadrado
// console.group('Cuadrados');
// const ladoCuadrado=5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

 //const perimetroCuadrado = ladoCuadrado*4;
 function perimetroCuadrado(lado){
    return lado*4;
}

//perimetroCuadrado(60);

function areaCuadrado(lado){
   return lado*lado;
}
// console.groupEnd();

//console.group('Triangulos');
function perimetroTriangulo(lado1,lado2,base){
   return lado1+lado2+base;
}
function areaTriangulo(base, altura){
   return (base*altura)/2;
}
//console.groupEnd();
//console.group('Circulos');
function diametroCirculo(radio){
   return radio *2;
}
//Pi
const PI = Math.PI;
// console.log(`PI es ${PI}`)

function perimetroCirculo(radio){
   const diametro =diametroCirculo(radio);
   return diametro*PI;
}

function areaCirculo(radio){
   return (radio*radio)*PI;
}
function alturaTriangulo(ladoa,ladob,base){
    if(ladoa===ladob){
    return (Math.sqrt((ladoa*ladob)-(((base/2)*(base/2)))));
    }
    else{
        return("los lados deben ser iguales");
    }
 }
//console.groupEnd();


//Aqui interactuamos con EL HTML
function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   //alert(perimetro);
   Resultp.innerText = "El perimetro del cuadrado es"+perimetro;
}

function calcularAreaCuadrado(){
   const input = document.getElementById("InputCuadrado");
   //console.log(input);
   const valor = input.value;
   //console.log(valor);

   const area = areaCuadrado(valor);
   const Resultp = document.getElementById("Resultp");
   Resultp.innerText = "El area del cuadrado es"+area;
   //alert(area);
}
function calcularAltura(){
    const input = document.getElementById("InputTrianguloA");
    //console.log(input);
    const valor = input.value;
    const input2 = document.getElementById("InputTrianguloB");
    //console.log(input);
    const valor2 = input2.value;
    const input3 = document.getElementById("InputTrianguloBase");
    //console.log(input);
    const valor3 = input3.value;
    //console.log(valor);
 
    const altura = alturaTriangulo(valor,valor2,valor3);
    const Resultp = document.getElementById("Rsultado");
    Resultp.innerText = "La altura del triangulo es "+ altura;
    //alert(area);
 }