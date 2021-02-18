function mostrar() {
  var destinoIngresado;
  destinoIngresado = txtIdDestino.value;
  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Hace frio en este destino ";
      break;
    default:
      mensaje = "Hace calore";
      break;
  }

  alert(mensaje);
}
