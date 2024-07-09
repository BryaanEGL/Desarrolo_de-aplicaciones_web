//Realizar un programa que muestre todos los números primos en el rango que el usuario digite
inicio = 10;
fin = 15;

for (numero = inicio; numero <= fin; numero++) {
  if (numero <= 1);
  Primo = true;
  for (i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      Primo = false;
      break;
    }
  }
  if (Primo) console.log(numero);
}
