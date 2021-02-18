/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() {
  //txtIdCantidad//txtIdprecioDescuento
  var precioUnitario;
  var cantidadLamparas;
  var marca;
  var precioDescuento;
  var precioSinDescuento;
  var descuento;
  var iibb;
  descuento= 0;

  precioUnitario = 35;
  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  cantidadLamparas = parseInt(cantidadLamparas);

  precioSinDescuento = cantidadLamparas * precioUnitario;
  precioDescuento = precioSinDescuento;

  marca = document.getElementById("Marca").value;

  if (cantidadLamparas > 5) {
   descuento = precioSinDescuento / 2;
  }
  if (cantidadLamparas == 5) {
    if (marca == "ArgentinaLuz") {
      descuento =  (precioSinDescuento * 40) / 100;
    } else {
      descuento =  (precioSinDescuento * 30) / 100;
    }
  }
  if (cantidadLamparas == 4) {
    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
      descuento = (precioSinDescuento * 25) / 100;
    } else {
      descuento = (precioSinDescuento * 20) / 100;
    }
  }
  if (cantidadLamparas == 3) {
    if (marca == "ArgentinaLuz") {
     descuento = (precioSinDescuento * 15) / 100;
    } else {
      if (marca == "FelipeLamparas") {
       descuento =(precioSinDescuento * 10) / 100;
      } else {
       descuento = (precioSinDescuento * 5) / 100;
      }
    }
  }
  precioDescuento= precioSinDescuento - descuento;
  txtIdprecioDescuento.value = precioDescuento;
  if (precioDescuento>120)
  {
    iibb=precioDescuento * 10/100;
    precioDescuento=precioDescuento + iibb;

    alert ( "Total: "+ precioDescuento+ "Usted pago $ " + iibb+ "de ingresos brutos"); 
  }
}
