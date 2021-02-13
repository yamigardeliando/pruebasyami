function mostrar() {
  /*{
	var edad;

edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
 

/*if (edad >17) 
{
  alert("es mayor de edad");

}


if (edad < 18)
{
alert ("es menor de edad")
}*/
  /*
if (edad >17) 
{
  alert("es mayor de edad");
}
  else  
	 alert ("es menor")
  }
}*/
  /*if(edad >17) 
	{
		alert("es mayor de edad");
	}
	else
	{
		alert ("es menor");
	}

}*/
  /*pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/

  var cantidadDeKilometros;
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
