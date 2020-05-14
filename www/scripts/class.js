// CLASES

const $card = document.querySelector(".card");

// Sacamos la primera card que tenga la clase "card"
console.log($card);

// Sacamos el nombre de la clase. En este caso "card"
console.log($card.className);

//Sacamos la primera card pero en forma de Token
console.log($card.classList);

// Miramos si card contiene la propedad "rotate-45". En este caso no la tiene asi que devolvera false
console.log($card.classList.contains("rotate-45"));


// AÑADIMOS UNA PROPIEDAD A LA CLASE : ADD

$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);

// ELIMINAMOS UNA CLASE (REMOVE)

$card.classList.remove("rotate-45");

// ELIMINAMOS UNA CLASE O LA BORRAMOS DEPENDIENDO DE SI ESTA EXISTE O NO (TOGGLE)

//Si aplicamos un toogle a una propiedad eliminara la propiedad si ya la tiene y la agregara si no la tiene

// En este caso la agrega porque en el anterior punto la habiamos eliminado. Contains mostrara true
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));

// Si vuelvo a aplicar toggle la borrara. Contains mostrara false

$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));

//REEMPLAZAE UNA CLASE POR OTRA (REPLACE)
// Reemplazamos la clase "rotate-45" por la clase "rotate-135". Al chequear si existe la clase "rotate-45"
// nos dara false

$card.classList.replace("rotate-45","rotate-135");
console.log($card.classList.contains("rotate-45"));

// Agregando dos clases a la vez

$card.classList.add("opacity-80","sepia");

