/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;

	alert(nombreIngresado);

}


/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensajeDeRespuesta;

	nombre= prompt("ingrese nombre");

	mensajeDeRespuesta="su nombre es : "+nombre;
	
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//mostrando


}
