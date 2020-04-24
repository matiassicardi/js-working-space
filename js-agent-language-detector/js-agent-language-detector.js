window.onload = function() {
    if (window.navigator.language != "en" & window.navigator.language !="en-US") {       
        window.location.href = './es/index.html'; // Envía al sitio en Español 
        } else {
            window.location.href = './en/index.html'; // Envía al sitio en Inglés
        }
}

window.onload = function() {
    var idioma = navigator.language || navigator.userLanguage; // Detecta el idioma por defecto del browser
    alert ("Tu browser está configurado en: " + idioma);
}
