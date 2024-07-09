//Realizar un programa que sume todos los números pares del 0 al mil
limite=1000;
Pares=0;

for (i =0; i<=limite;i++) {
    if (i%2===0){
        Pares +=i;
    }
}
console.log("la suma de los numeros pares del 0 al 1000 es: ",Pares)