//El ejemplo toma la api de randomuser.me/api que tira usuarios y los devuelve en un string con un objeto llamado 'results'

const decargarUsuarios = cantidad => new Promise((resolve, reject) => {

    //se le pasa a la url de la api el parámetro 'cantidad'
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //se hace el llamado a Ajax, por convención se usa la const 'xhr'
    const xhr = new XMLHttpRequest();

    //se abre la conexión, al método 'open' se le pasan tres parámetros: el método (GET, POST o el que sea), la dirección de la API, y si se quiere que sea asincrónico (true/false)
    xhr.open('GET', api, true);

    //se crea el onload, y se le pide que se fije si el status de la carga es '200', es decir, exitoso
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve( Json.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional, se puede crear el 'on error' y asignárselo al reject
    xhr.onerror = (error) => reject(error);

    //se crea el send
    xhr.send()

});

//Lo siguiente es armar el 'then' correspondiente a la promesa

decargarUsuarios(20)
    .then(
        // 'miembros => console.log(miembros),' se podría usar ver en cnsola los resultados
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    );

//Creamos la función que va a imprimir los resultados dentro de un HTML
function imprimirHTML (usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen: <img src="${usuario.picture.medium}">
            </li>
        `
    });
}

//Finalmente se crrea una constante en la que se alojará el contenedor donde mostraremos los resultados, y se los envío
const contenerdorApp = documents.querySelector('#app');
contenerdorApp.innerHTML = html;