// **********Ejerciio-1:
const sumar = function(a, b){
    return a+b;
}
console.log(sumar(10,20));

// **********Ejercicio-2:
const promedio = function(exam1, exam2, exam3, exam4){
    return (exam1+exam2+exam3+exam4)/4;
}
console.log(`El promedio de los exámenes es de ${promedio(07, 09, 11, 16)}`);

// *********Ejercicio-3:
const areaRectangulo = function(largo, ancho){
    return largo*ancho;
}
console.log(`El área del rectángulo es de ${areaRectangulo(10.5, 5)} unidades cuadradas`);

// *********Ejercicio-4:
const areaTriangulo = function(base, altura){
    return (base*altura)/2;
}
console.log(`El área del triángulo es de ${areaTriangulo(7.5, 6)} unidades cuadradas`);

// *********Ejercicio-5:
const areaCirculo = function(radio){
    return Math.PI*Math.pow(radio,2);
}
console.log(`El área del círculo es de ${Math.round(areaCirculo(3))} unidades cuadradas`);

// *********Ejercicio-6:
const sueldoSemanal = function(HorasTrabajadas, salarioHoraHombre) {
    return HorasTrabajadas*salarioHoraHombre;
}
console.log(`El sueldo semanal asciende a ${sueldoSemanal(40,30.5)} soles`);

// *********Ejercicio-7:

const medidaPulgada = function(medidaMetros) {
    const factorConversion = 0.0254;
    return medidaMetros/factorConversion;
}
console.log(`Se requiere ${Math.round(medidaPulgada(90))} pulgadas de tela`);

// *********Ejercicio-8:
const cantidadDolares = function(cantidadSoles) {
    const tipoCambio = 3.85;
    return cantidadSoles/tipoCambio;
}
console.log(`Se puede adquirir ${Math.round(cantidadDolares(1200))} dolares`);

// *********Ejercicio-9:
const edadActual = function(anioNacimiento) {
    const anioActual = 2021;
    return anioActual-anioNacimiento;
}
console.log(`La edad actual es de ${edadActual(1997)} años`);

// *********Ejercicio-10:
const nombres = [{nombre: 'Juan', edad: 30},{nombre: 'Marco', edad: 28}
,{nombre: 'Miguel', edad: 18} ];

if(nombres[0].edad<nombres[1].edad && nombres[0].edad<nombres[2].edad){
    console.log(`La persona de menor edad es ${nombres[0].nombre} y tiene ${nombres[0].edad} años`);
}
else{
    if(nombres[1].edad<nombres[0].edad && nombres[1].edad<nombres[2].edad){
        console.log(`La persona de menor edad es ${nombres[1].nombre} y tiene ${nombres[1].edad} años`);
    }
    else{
        console.log(`La persona de menor edad es ${nombres[2].nombre} y tiene ${nombres[2].edad} años`);
    }
}


// *********Ejercicio-11:
const bono = function(anioAntiguedad) {
    if(anioAntiguedad>0 && anioAntiguedad%1 ===0){
        if(anioAntiguedad<=5){
            console.log(`Su bono correspondiente es de $${anioAntiguedad*100}`);
        }
        else{
            console.log(`Su bono correspondiente es de $1000`);
        }
    }
    else {
        console.log(`Introducir el año de antiguedad correctamente`);
    }
} 
bono(8);

// *********Ejercicio-12:

const salario = function(salarioInicial, porcentaje, anios) {
    const salarioTotal = salarioInicial*(1+porcentaje*anios);
    const salarioParcial = salarioInicial*(1+porcentaje);
    return `El salario al cabo de ${anios} años es de $${Math.round(salarioTotal)} y el salario recibido por cada año es de $${Math.round(salarioParcial)}`
}

console.log(salario(1500, 0.1, 6));

// *********Ejercicio-13:
const nota = [12, 15, 9, 10, 18, 7, 11];
let  aprobado = 0,
    desaprobado = 0;

for (let i=0; i<nota.length; i++){
    if(nota[i]>=11){
        aprobado++;
    }
    else{
        desaprobado++;
    }
}
console.log(`
    cantidad de aprobados = ${aprobado}
    cantidad de desaprobados = ${desaprobado}
`);

// *********Ejercicio-14:
const focos = ['verde','verde','rojo','blanco','blanco',
'blanco','verde','verde','rojo','blanco'];

let cantidadVerde = 0,
    cantidadRojo = 0,
    cantidadBlanco = 0;

for(let n=0; n<focos.length; n++){
    switch(focos[n]){
        case 'verde':
            cantidadVerde++;
            break;
        case 'rojo':
            cantidadRojo++;
            break;
        case 'blanco':
            cantidadBlanco++;
            break;
        default:
            break;
    }   
}
console.log(`
    Cantidad de focos verdes = ${cantidadVerde}
    Cantidad de focos rojos = ${cantidadRojo}
    Cantidad de focos blancos = ${cantidadBlanco}
`)

// *********Ejercicio-15:
const edad =30;

if(edad>= 18){
    if(edad<=70){
        console.log(`Si puedes votar en las próximas elecciones y es obligatorio`);
    }
    else{
        console.log(`Si puedes votar en las próximas elecciones pero no es obligatorio`);
    }
}
else{
    console.log(`Aun no estas apto para votar`);
}