function mostrar() {
  //tomo la edad  // txtIdEdad/ estadoCivil

  var edadPersona;
  var estadoCivilPersona;

  edadPersona = document.getElementById("txtIdEdad").value;
  edadPersona = parseInt(edadPersona);
  estadoCivilPersona = estadoCivil.value;

if ( edadPersona<18 && estadoCivilPersona!= " Soltero")
{ 
alert ( "Es muy pequeño para NO ser soltero")
}



} //FIN DE LA FUNCIÓN
