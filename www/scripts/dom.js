//Representa el head del documento
console.log(document.head);
// Representa el body del documento
console.log(document.body);
// Representa la etqueta HTML
console.log(document.documentElement);
// Te devuelve el tipo de documento
console.log(document.doctype);
// Acceder al juego de caracteres del documento
console.log(document.charset);
// Acceder al titulo del documento
console.log(document.title);
//Acceder a los links que tenga el documento
console.log(document.links);
//Acceder a las imagenes que tenga el documento
console.log(document.images);
//Acceder a los formularios que tenga el documento
console.log(document.forms);
// Acceder a las hojas de estilos
console.log(document.styleSheets);
//Acceder a los scripts de programacion
console.log(document.scripts);

setTimeout = (()=>{
    console.log(document.getSelection().toString());
},3000);

// Podemos escribir desde el DOM utilizando esta instruccion
document.write("<h2>Hola mundo desde el DOM</h2>");

