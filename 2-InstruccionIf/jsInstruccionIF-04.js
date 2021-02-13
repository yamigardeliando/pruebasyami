function mostrar()
{
	//tomo la edad  con if  // txtIdEdad

	var edad
	var=document.getElementById("txtIdEdad").value; 
	edad= parseInt( edad); 

	console.log("la edad ingresada es : " + edad);

	if  (edad > 13)
	{
		
		alert ( "USted es adolecente")
	}
	if (edad <18)
	{ 
      alert ( " Usted es adolescente")
	}
//otra opcion con &&// 
if ( edad <18 && edad> 12)
{ 
	alert ("adolescente")
}







}//FIN DE LA FUNCIÓN

if (!(edad <18&& edad > 12)))
{
	alert ("no es adolescente"); 

}
if (!(edad >17)

{
	alert ("no es adolescente"); 
}
