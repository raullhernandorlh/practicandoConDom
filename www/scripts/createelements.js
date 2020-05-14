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
