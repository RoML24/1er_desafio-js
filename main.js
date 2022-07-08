console.log("Inicio de programa")
let cantidad = prompt("Ingrese la cantidad de tornillos fabricados en un mes");

if (cantidad >= 500) {
    console.log("Rendimiento optimo")

}
if (cantidad >= 400 && cantidad <=499) {
   console.log("Muy buen Rendimiento")

}
if (cantidad >= 300 && cantidad <=399) {
   console.log("Rendimiento aceptable")

}
if(cantidad <=250) {
    console.log("Rendimiento malo")
    
    }