console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// De esta manera me trae el enlace de link-dom
console.log(document.querySelector(".link-dom").href);

// Si queremos la direccion href(solo el valor)
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Hemos cambiado el lenguaje de "es" a "en"
document.documentElement.lang = "en";
// Imprimimos por consolo este atributo cambiado
console.log(document.documentElement.getAttribute("lang"));
//Establecemos un nuevo valor con la "setAttribute"

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.getAttribute("lang"));

const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target","_blank");
$linkDom.setAttribute("rel","_noopener");
$linkDom.setAttribute("href","http://www.facebook.com");
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));


// Data Attributes

// Con este comando sacamos el tecto que tiene el atributo "data-description"
console.log($linkDom.getAttribute("data-description"));
// Con este atributo sacamos el dataset de la clase ".link-dom"
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
//Para establecer el valor utilizariamo : setAttribute
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "Susbscribete a mi canal y comparte";
console.log($linkDom.dataset.description);





