function mostrar() {
  var destinoIngresado;
  destinoIngresado = txtIdDestino.value;

  switch (destinoIngresado) {
    case "Ushuaia":
      mensaje = "Se encuentra al Sur";
      break;
    case "Bariloche":
      mensaje = "Se encuentra al Oeste";
      break;

    case "Cataratas":
      mensaje = "Se encuentra al Norte";
      break;
    default:
      mensaje = " Se encuentra al Este";
  }
  alert(mensaje);

  alert(destinoIngresado);
} //FIN DE LA FUNCIÓN

/*Al selecionar un destino ,
 indicar el punto cardinal de nuestro pais 
 en donde se encuentra Norte, Sur, Este u Oeste
 bariloche - mar del plata- cataratas- ushuaia*/
