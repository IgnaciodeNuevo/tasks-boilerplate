// https://github.com/bramstein/fontfaceobserver
const FontFaceObserver = require('fontfaceobserver');

(function () {
    var htmlDocument = document.documentElement;
    var font = new FontFaceObserver('FontName');

    Promise.all([font.load()])
        .then(function() {
            htmlDocument.classList.add('fonts-loaded');
            console.log('Fonts loaded');
        })
        .catch(function() {
            htmlDocument.classList.remove('fonts-loaded');
        });

    var fontLoaded = 'fonts-loaded';
    localStorage.setItem(fontLoaded, true);

    // This would be the IIFE that checks loacalStorage
    if (!window.localStorage.length) {
        console.log('No font stored!');
    }
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem([i]) == true) {
            alert('true');
            htmlDocument.classList.add('fonts-loaded');
        }
    }
})();
