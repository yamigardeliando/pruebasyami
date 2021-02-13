function mostrar() {
  //tomo la edad

  var edadPersona;
  var estadoCivilPersona;

  edadPersona = document.getElementById("txtIdEdad").value;
  edadPersona = parseInt(edadPersona);
  estadoCivilPersona = estadoCivil.value;

  if (edadPersona > 18)
   {

   }
	if (estadoCivilPersona == " Soltero")
	{ 
	 alert(" Es soltero y no es menor ");
  }
}
 //FIN DE LA FUNCIÓN
