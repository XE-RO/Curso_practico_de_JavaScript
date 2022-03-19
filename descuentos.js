// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio,descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;

const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/100;
return precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

//document.getElementById("promoCode").value;

// function calcular(){

//     const descuento = document.getElementById("promoCode");

//     if (descuento == "promo1"){
//         const inputPrice = document.getElementById("InputPrice").value;
//     const discountValue = 10;
//     const precioConDescuento = calcularPrecioConDescuento(inputPrice,discountValue);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText ="El precio con descuento es $" + precioConDescuento;  
//     }
//     else if(descuento == "promo2"){
//         const inputPrice = document.getElementById("InputPrice").value;
//     const discountValue = 40;
//     const precioConDescuento = calcularPrecioConDescuento(inputPrice,discountValue);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText ="El precio con descuento es $" + precioConDescuento;
//     console.log("promo2")
        
//     }

//     else if (descuento == "promo3"){
//         const inputPrice = document.getElementById("InputPrice");
//         const priceValue = inputPrice.value;
//         const discountValue = 50
//         const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
//         const resultP = document.getElementById("ResultP");
//         resultP.innerText ="El precio con descuento es $" + precioConDescuento;

//     }
//     else{
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText ="El precio con descuento es $" + precioConDescuento;
//     }
// }

// function calcular(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText ="El precio con descuento es $" + precioConDescuento;
// }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento
// });
