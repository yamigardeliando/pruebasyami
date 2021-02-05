/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  var importe;
  var mensaje;
  var aumento; 
  var resultado; 
  //document.getElementById("txtIdSueldo").value = importe;//
  importe = document.getElementById("txtIdSueldo").value;
  importe = parseInt(importe); 
  aumento =  10 * 100 / importe;   
  mensaje = "su sueldo es : " + (importe + parseInt(aumento)); 
  alert(mensaje);
}
