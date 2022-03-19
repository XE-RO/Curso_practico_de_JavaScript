//Codigo de lcuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

function areacuadrado(lado){
    return lado * lado;
}

// console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");
// console.groupEnd();

//Codigo de triangulo

// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm " 
//     + ladoTriangulo2 
//     + "cm " 
//     + baseTriangulo 
//     + "cm");

//     const alturaTriangulo = 5.5;
//     console.log("la altura del triangulo mide: " + alturaTriangulo + "cm ");
    
    function perimetrotriangulo(lado1,lado2,base){
        return (lado1+lado2+base);
    } 
    // console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm")
    // const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    function areaTriangulo(base,altura){
        return (base * altura) / 2;
    }
    // console.log ("El area del triangulo es: " + areaTriangulo + "cm^2");
    console.groupEnd();

    //Codigo de circulo

    console.group("Circulo");

    //Radio
    // const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo + "cm ");

    // //Diamtro
    // const diametroCirculo = radioCirculo * 2;
    // console.log("el diametro del circulo: " + diametroCirculo + "cm ");
    function diametroCirculo(radio){
        return radio * 2;
    }

    //PI
    const PI = Math.PI;
    console.log("PI vale: " + PI)


    //Circunferencia
    // const perimetroCirculo = diametroCirculo * PI;
    // console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);{
            return diametro * PI;
        }
    }

    //Area
    //  const areaCirculo = (radioCirculo * radioCirculo) * PI;
    // console.log("El area del circulo es: " + areaCirculo + "cm ")

    function areaCirculo(radio){
            return (radio * radio) * PI;
    }
    

    console.groupEnd();

    //Funciones de html

     function calcularPerimetroCuadrado(){
         const input = document.getElementById ("InputCuadrado");
         const value = input.value;
         const perimetro = perimetroCuadrado(value);
         alert(perimetro);
     }
     function calcularAreaCuadrado (){
         const input = document.getElementById ("InputCuadrado");
         const value = input.value;
         const area = areacuadrado(value);
         alert(area);

     }
/////////////////

//Calcular Catetos

 function calcCateto () {
    var a = (document.getElementById("H").value);
    var b = (document.getElementById("C1").value);
     
var resultado = (Math.sqrt((a * a) - (b*b)));
    alert(resultado);


}


//Calcular hipotenusa
function calcHipotenusa(){
    var b = (document.getElementById("C1").value);
    var c = (document.getElementById("C2").value);
var resultado = (Math.sqrt((b * b) + (c * c)));
alert(resultado)

}


    




//Triangulo en HTML

// function calculoCateto(){

    // var Cateto1 = parseInt(document.getElementById('C1').value);
    ////var resultado = calcCateto(Hipotenusa,Cateto1)
    //console.log(Hipotenusa,Cateto1)
//     console.log(Hipotenusa_C);
// }














