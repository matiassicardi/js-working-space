window.onload = function() {
            
var ln = x=window.navigator.language || navigator.browserLanguage;

if (ln == 'en' || ln == 'en_US') {
    window.location.href = '/en';//si esta en inglés va a inglés
    } else if (ln == 'es') {
    window.location.href = '/es'; // si es es va a español
    } else {
    window.location.href = '/es'; // si no es ninguna de los dos va a español
    }
}