/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  var largo;
  var ancho;
  var perimetro;
  var alambre;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;

  perimetro = (largo + ancho) * 2;
  alambre = perimetro * 3;
  alert("Usted necesita comprar " + alambre + "metros");
}
function Circulo() {
  var circunsferencia;
  var radio;
  var alambre;
  radio = document.getElementById("txtIdRadio").value;
  radio = parseInt(radio);
  const PI = 3.14;
  circunsferencia = 2 * PI * radio;
  alambre = circunsferencia * 3;
  alert("Usted necesita comprar " + alambre + "metros");
}
function Materiales() {
  var largo;
  var ancho;
  var area;
  var cemento;
  var cal;
  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  area = largo * ancho;
  cemento = area * 2;
  cal = area * 3;
  alert(
    "para realizar un contrapiso de: " +
      largo +
      " x " +
      ancho +
      " usted necesita comprar: " +
       cal +
      " bolsas  de cal  y " +
      cemento +
      " bolsas de cemento"
  );
}
