/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//nombreIngresado=txtIdNombre.value;//
	nombreIngresado=document.getElementById("txtIdNombre").value;


	alert(nombreIngresado); 

}


var preciobase;
var localidad;
var EstacionDelAño;
var aumento;
var descuento;
var precioFinal;

preciobase=15000
localidad=prompt("ingrese la localidad a la que desea viajar ");
EstacionDelAño=prompt( "ingrese la estacion del año en la que desea viajar ");
