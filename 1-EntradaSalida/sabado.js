/*var cantidadDeKilometros;
  var cantidadDeHoras;
  var velocidad;
  cantidadDeKilometros = prompt("Ingrese cantidad de kilometros ");
  cantidadDeKilometros = parseInt(cantidadDeKilometros);
  cantidadDeHoras = prompt("Ingrese cantidad de horas");
  cantidadDeHoras = parseInt(cantidadDeHoras);
  velocidad = cantidadDeHoras / cantidadDeKilometros;

  if (velocidad < 61) {
    mensaje = "Muy lento";
  } else {
    if (velocidad < 81) {
      mensaje = "Lento";
    } else {
      if (velocidad < 101) {
        mensaje = "buen ritmo";
      } else {
        if (velocidad > 120) {
          mensaje = "eso esta mal";
        } else {
          mesaje = " ahi esta la ley";
        }
      }
    }
  }
  alert(mensaje);
}
*/
function mostrar() {
  var nombre;
  var peso;
  var altura;
  var imc;

  nombre = prompt("ingrese su nombre ");
  peso = prompt("Ingrese su peso ");
  peso = parseInt(peso);
  altura = prompt("ingrese su altura: ( sin puntos ni comas) ");
  altura = parseInt(altura);
  imc = altura / peso;

  if ((imc < 18, 5)) {
    mensaje = "Bajo Peso";
  } else {
    if (imc < 24) {
      mensaje = nombre + ",  Usted tiene:  un peso Normal";
    } else {
      if (imc < 30) {
        mensaje = nombre + ", Usted tiene: Sobre Peso";
      } else {
        if (imc < 35) {
          mensaje = nombre + ", Usted tiene: Obesidad I";
        } else {
          if (imc < 40) {
            mensaje = nombre + ", Usted tiene Obesidad II";
          } else {
            mensaje = nombre + ", Usted tiene Obesidad III";
          }
        }
      }
    }
  }
  alert(mensaje);
}

/*3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/