function mostrar()
{
	//tomo la edad  

var edad 
edad= document.getElementById( "txtIdEdad").value;
edad =parseInt( edad);

/*	if(edad>17)
	{
		alert("es mayor de edad");
	}
	if(edad<13)
	{
		alert("es un niño");
	}

	if(edad<17 && edad>13)
	{ alert  ( "es adolescente" );
	}
*/

	if(edad<13)
	{
		alert("es un nino");
	}
	else
	{ 
		if (edad>17)
		{ 
			alert ("Es mayor");
		}
		else
		{
			alert( "Adolescente");
		}
	
	}

	

}//FIN DE LA FUNCIÓN