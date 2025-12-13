// Wrap the script loading logic in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Dynamically load all scripts in the scripts folder
    (function() {
        const scripts = [
            "fizzbuzz0.js",
            "fizzbuzz1.js",
            "fizzbuzz2.js",
            "fizzbuzz3.js",
            "fizzbuzz4.js",
            "introform.js",
            "prism.js",
            "scrollReveal.js"
        ];

        const scriptFolder = './scripts/'; // Adjusted path to match the directory structure

        scripts.forEach(script => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptFolder + script;
            scriptElement.type = 'text/javascript';
            scriptElement.defer = true;
            document.body.appendChild(scriptElement);

        });
    })();
});