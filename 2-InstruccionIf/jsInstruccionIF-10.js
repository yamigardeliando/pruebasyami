function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  //Genero el número RANDOM entre 1 y 10

  var numeroRandom;

   numeroRandom= Math.floor((Math.random() * 10) + 1);
//numeroRandom=9;
/*  Prueba de escritorio
   ingreso 9 mensaje = exelente
   ingreso 8 mensaje = aprobo
   ingreso 6 mensaje =aprobo 
   ingreso 4 mensaje =aprobo
   ingreso 3 mensaje = vamos.. */ 
	// harcodear

	console.log ( numeroRandom); 
  if (numeroRandom > 8) 
  {
    alert("EXELENTE");
  }
  
 else
 { 
	if 
	(numeroRandom <4)
	{
		alert("Vamos, la proxima se puede");
	}
else 
{
	alert( "Aprobado")
}
 
	}
 

} //FIN DE LA FUNCIÓN
