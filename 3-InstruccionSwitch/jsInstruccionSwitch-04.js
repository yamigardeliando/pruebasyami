function mostrar() {
  //tomo el mes

  var mesDelAño = txtIdMes.value;
  var mensaje;
  switch (mesDelAño) {
    case "Abril":
    case "Septiembre":
    case "Noviembre":
      mensaje = "Este mes tiene 30 dias ";
      break;

    case "Febrero":
      mensaje = "Este mes tiene 28 días";

    default:
      mensaje = "Este mes tiene tiene 31 días";

      alert(mensaje);
  }

  alert(mesDelAño);
} //FIN DE LA FUNCIÓN

/*
31 dias: Enero, marzo, mayo, julio, agosto, octubre y diciembre
30 días: Abril, junio, septiembre y noviembre. 
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
