const $whatIsDom = document.getElementById("que-es");

let text = `

    <p>
        El Modelo de Objetos del Documento es un APÌ para documentos HTML y XML
    </p>

    <p>
        Este provee una representacion estructural del documento, permitiendo modificar
        su contenido y presentacion visual mediante codigo JS.

    </p>

    <p>
        <mark> El <b>DOM</b> no es parte de la especificacion de <i>Javascript</i>, es una API para los
        navegadores</mark>
    </p>
`

// $whatIsDom.innerText = text;
// Para insertar "solo tecto" utilizariamos "text-content"
$whatIsDom.textContent = text;
// Para insertar "codigo HTML" utilizariamos "innerHTML"
$whatIsDom.innerHTML = text;
$whatIsDom.outerHTML = text;