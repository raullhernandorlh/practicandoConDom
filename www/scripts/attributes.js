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
