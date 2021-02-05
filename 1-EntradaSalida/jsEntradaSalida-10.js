/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var mensaje;
	var descuento; 

	//document.getElementById("txtIdSueldo").value = importe;//
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe); 
	descuento =  25 * 100 / importe;   
	mensaje = "su sueldo es : " + (importe - parseInt(descuento)); 
	alert(mensaje);
}
