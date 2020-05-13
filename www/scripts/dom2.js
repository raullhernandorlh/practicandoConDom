// Obtener todas las li

console.log(document.getElementsByTagName('li'));

//Obtener las cards

console.log(document.getElementsByClassName('card'));

// Sacar el nodo de nombre name. En este caso es un formulario
console.log(document.getElementsByName('name'));

//Sacamos la eiqueta HTMl cuyo id es menu
console.log(document.getElementById('menu'));

// Utilizamos query selector para pillar cualquier elemento css

console.log(document.querySelector("#menu"));

// Query selector solamente te va a traer el primer selector del tipo que le hayas especificado

console.log(document.querySelector("a"));

// Para traerse a todos los elementos de un tipo

console.log(document.querySelectorAll("a"));

// Para saber cuantos elementos a tengo. Me devolvera un numero

console.log(document.querySelectorAll("a").length);

// Imprimir el codigo html de cada enlace a

document.querySelectorAll("a").forEach((el)=> console.log(el));

// Imprimos el codigo de la segunda tarjeta

console.log(document.querySelectorAll(".card")[2]);

// Traer los elementos li que estan dentro del id menu

console.log(document.querySelectorAll("#menu li"));