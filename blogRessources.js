/* 
Content Management Sites (CMS) functions
*/

//sumamos el titulo del post al URL

function urlSlug(title) {
    let postUrl = title.slice() //creamos una copia del title (que es un string)
  
    return postUrl //retornamos la copia del title
        .toLowerCase() //pasado a minusculas
        .trim() //eliminando los espacios en blanco al principio y final del title
        .split(/\s+/) //convertimos el string en un array, separando las palabras usando como corte los espacios en blanco. A traves de la regExp buscamos un solo caracter de espacio en blanco, incluido el espacio, tabulación, avance de página, avance de línea y otros espacios Unicode. Con el "+" le pedimos que busque todos los espacios en blanco.
        .join("-") //unimos el array nuevamente en un string agregando entre palabra y palabra "-".
}

//verificamos que el title se un string y que no venga vacio

function checkTitleStatus(title) {
    if (typeof title === 'string' && title.length > 0) { //verificamos que title sea un string y que no este vacio
        return urlSlug(title) //corremos la function que agrega el title al url
    } else {
        console.log("El post debe llevar titulo. El titulo debe ser un string.") //si el title esta vacio, informamos
        //se debe disparar una function que muestre en pantalla la alerta correspondiente
    }
}


