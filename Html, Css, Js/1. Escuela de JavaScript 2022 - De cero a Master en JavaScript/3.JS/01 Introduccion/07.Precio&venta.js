//variables
let vv = 0, igv = 0, pv = 0;

//Entrada de datos
vv = parseFloat(prompt("Ingrese valor de venta: "));

//Proceso de datos
igv = vv * 0.19;
pv = vv + igv;

//Salida de datos
document.write("Valor de venta: ", vv, "<br>");
document.write("IGV: ", igv, "<br>");
document.write("PV: ", pv, "<br>");