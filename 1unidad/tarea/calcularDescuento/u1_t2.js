const calcular_descuento = (precio, descuento) => {
  descuento = descuento /100;
  let descuentoTotal = precio * descuento;
  precioConDescuento = precio - descuentoTotal;
  
  console.log("precio original: " + precio + ", descuento agregado: " + descuento*100 + "%" + ", precio con descuento incluido: " + precioConDescuento);
}
  calcular_descuento(633, 8);