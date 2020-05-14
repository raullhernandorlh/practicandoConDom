// ESTILOS Y ATRIBUTOS CSS

// Obteniendo los estilos

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// Modificando los estilos (setProperty)


// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.marginLeft= "auto";
// $linkDOM.style.padding= "1rem";
// $linkDOM.style.borderRadius= ".5rem";

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log(getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS

// Representamos el html

const $html = document.documentElement
const $body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor;


$html.style.setProperty("--darkcolor","#222");
$html.style.setProperty("--yellowcolor","yellow");
varDarkColor = getComputedStyle($html).getPropertyValue("--darkcolor");
varYellowColor = getComputedStyle($html).getPropertyValue("--yellowcolor");

$body.style.setProperty("background-color",varDarkColor);
$body.style.setProperty("color",varYellowColor);

