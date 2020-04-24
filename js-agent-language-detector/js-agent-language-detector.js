window.onload = function() {
            
var userLang = x=window.navigator.language || navigator.browserLanguage; // detecta la preferencia de idioma del browser

if (userLang == 'en' || userLang == 'en_US') {
    window.location.href = './en/index.html'; // si se detecta el inglés, dirige al sitio en inglés
    } else if (userLang == 'es') {
    window.location.href = './es/index.html'; // si se detecta el español, dirige al sitio en español
    } else {
    window.location.href = './es/index.html'; // si se detecta cualquier otra preferencia de idioma, dirige al sitio en español
    }
}
