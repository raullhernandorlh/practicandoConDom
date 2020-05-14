// TRAVERSING
// Recorrer el DOM a traves de sus nodos

// Aqui estamos haciendo referencia a la section que tiene la clase ".cards"
$cards = document.querySelector(".cards");
console.log($cards);

//Si queremos hacer referencia a cada uno de los hijos de la section. Te devuelve un HTML Collection
// con cada una de las etiquetas figure
console.log($cards.children);

//Retornar el tercer hijo. Sera la tercera foto ya que recordemos que la coleccion que devuelve empieza a contar
// desde 0

console.log($cards.children[2]);

//Retornamos el padre del section. En este caso es body porque va directamente sobre el body
console.log($cards.parentElement);
console.log($cards.parentNode);

// Imprimir la primera card
console.log($cards.firstElementChild);

// Imprimir la ultima card
console.log($cards.lastElementChild);

// Para buscar el body o el div mas cercana nuestra section

console.log($cards.closest("body"));
console.log($cards.closest("div"));

console.log($cards.children[3].closest("section"));