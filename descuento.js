function calcularPrecioConDescuento(precio,descuento){
    const porcentPriceWithDiscoiunt = 100-descuento;
    const precioConDescuento= (precio*porcentPriceWithDiscoiunt)/100;

    return precioConDescuento;
}
function calcularPrecioConCupon(precio2,cupon){
   
    switch (cupon){
        case "CUPON10%":
            return precio2-(precio2*0.1);
        case "CUPON20%":
            return precio2-(precio2*0.2);
        case "CUPON30%":
            return precio2-(precio2*0.3);
        default:
            return'Sin cupon' ;
    }

  
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputD");
    const discountValue = inputDiscount.value;

   

    const priceWithDiscount =calcularPrecioConDescuento(priceValue,discountValue);

    const resultp = document.getElementById("Resultp");
    resultp.innerText = `El precio con descuento seria: ${priceWithDiscount}`;
}
function cuponDescuento(){
    
    const inputPrecio = document.getElementById("InputPrecio");
    const priceValue = inputPrecio.value;

    const cupon = document.getElementById("InputCupon");
    const cuponValue = cupon.value;

    const precioCupon =calcularPrecioConCupon(priceValue,cuponValue);

    const resultadoCupon = document.getElementById("ResultadoCupon");
    resultadoCupon.innerText = `El precio con cupon seria: ${precioCupon}`;
}