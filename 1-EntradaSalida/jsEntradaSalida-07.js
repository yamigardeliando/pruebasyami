/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  var numerouno;
  var numerodos;
  var suma;
  var mensaje;

  numerouno = document.getElementById("txtIdNumeroUno").value; //i"txtIdNumeroUno"//
  numerodos = document.getElementById("txtIdNumeroDos").value; // txtIdNumeroDos//
  numerouno = parseInt(numerouno);
  numerodos = parseInt(numerodos);
  suma = numerouno + numerodos;
  mensaje = "la suma es: " + suma;

  alert(mensaje);
}

function restar() {
  var numerouno;
  var numerodos;
  var resta;
  var resultado;

  numerouno = document.getElementById("txtIdNumeroUno").value;
  numerodos = document.getElementById("txtIdNumeroDos").value;
  numerouno = parseInt(numerouno);
  numerodos = parseInt(numerodos);
  resta = numerouno - numerodos;
  alert("la resta es: " + resta);
}

function multiplicar() {
  var numerouno;
  var numerodos;
  var multiplicacion;
 

  numerouno = document.getElementById("txtIdNumeroUno").value;
  numerodos = document.getElementById("txtIdNumeroDos").value;
  numerouno = parseInt(numerouno);
  numerodos = parseInt(numerodos);
  multiplicacion = numerouno * numerodos;
  alert("El resultado de la multiplicacion es : " + multiplicacion);
}

function dividir() {
  var numerouno;
  var numerodos;
  var dividir;

  numerouno = document.getElementById("txtIdNumeroUno").value;
  numerodos = document.getElementById("txtIdNumeroDos").value;
  numerouno = parseInt(numerouno);
  numerodos = parseInt(numerodos);
  dividir = numerouno / numerodos;
  alert(" El resultado de la division es: " + dividir);
}
