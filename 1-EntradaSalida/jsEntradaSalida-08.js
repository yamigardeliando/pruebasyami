/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  var dividendo;
  var divisor;
  var resultado;
  console.log(resultado)
 // dividendo = 26;
  //divisor = 5;//
  dividendo= document.getElementById("txtIdNumeroDividendo").value
divisor= document.getElementById("txtIdNumeroDivisor").value
resultado = dividendo % divisor;
console.log(resultado)
 document.getElementById("txtIdNumeroDivisor").value = "El valor del resto es: " + resultado
 resultado=6546
   console.log(resultado)
}
/*function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;


	//dividendo=31; txtIdNumeroDividendo
	//divisor=2; txtIdNumeroDivisor
	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	resto=dividendo%divisor;
	console.log(resto);*/ 
