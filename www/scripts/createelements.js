// CREANDO ELEMENTOS

//Vamos a crearnos una card nueva


const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("animals");

// Seleccionamos el elemento padre donde vamos a insertar las tarjetas
$figure.classList.add("card");
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","animal");
$cards = document.querySelector(".cards");
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);

$cards.appendChild($figure);


// CREANDO ELEMENTOS DE OTRA FORMAT

$figure2 = document.createElement("figure");


$figure2.innerHTML = `
    <img src ="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaptiom>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);


// Creacion dinamica de li dentro de un ul previamente creado

const estaciones = ["Primavera", "Verano","Otoño", "Invierno"];

$ul= document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent =el;
    $ul.appendChild($li);
});


// Ejemplo con continentes . Simplificando el procedimiento de las estaciones

const continentes = ["Europa","Africa", "Asia", "Oceania","America"];

$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";

continentes.forEach(continente =>($ul2.innerHTML+=`<li>${continente}</li>`));


//UITILIZANDO FRAGMENTOS solo hariamos una inserccion al DOM. Si lo hacemos como en los ejermplos
// anteriores se haria una inserccion en el DOM por cada elemento que insertemos en el li.
// SI tenemos muchos objetos esto podria ser un gran problema para el rendimiento de la pagina

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(meses =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);

});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);