function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	console.log("la edad ingresada es : " + edad);
  
	if (edad >17) 
	{
	  alert("es mayor");
	}
	

}//FIN DE LA FUNCIÓN