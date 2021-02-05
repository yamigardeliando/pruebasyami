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

  numerouno = document.getElementById("txtIdNumeroUno").value; //id="txtIdNumeroUno"//
  numerodos = document.getElementById("txtIdNumeroDos").value; // txtIdNumeroDos// 
  numerouno = parseInt(numerouno);
  numerodos = parseInt(numerodos);
  suma = numerouno + numerodos;
  mensaje = "la suma es: " + suma;

  alert (mensaje);
}

function restar() {}

function multiplicar() {}

function dividir() {}
