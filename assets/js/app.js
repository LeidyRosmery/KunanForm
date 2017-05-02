var input=document.getElementsByTagName("input");
var guardar=document.getElementById("Guardar");
guardar.addEventListener('click',function(e){
event.preventDefault() ;

var expNombre=/([A-Z]){1}[a-z]+[\s]([A-Z]){1}[a-z]+/;
var expNombre1=/([A-Z]){1}[a-z]+/;
var expNacimiento=/(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}/;
if(!expNombre.test(input[0].value)){
  console.log("ingrese correctamente los nombres");
}
if(!expNacimiento.test(input[1].value)){
  console.log("ingrese fecha de nacimiento correctamente");
}
});

function getRandomInt(min, max) {
  return  valor=Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(0.5,15.7));
