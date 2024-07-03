/// Realizar un programa que determine si un triangulo es equilátero, isósceles o escaleno según las longitudes de sus lados

n1=10;n2=10;n3=10; 

if (n1===n2 && n2===n3){
    console.log("El triangulo es equilatero");
}else if (n1==n2|| n1===n3||n2===n3){
console.log("El triangulo es isoceles");

}else{
    console.log("El triangulo es escaleno");

}