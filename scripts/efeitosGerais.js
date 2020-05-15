var script = document.createElement("script");

script.src = './bootstrap-4.1.3-dist/js/bootstrap.bundle.min.js';

script.type = 'text/javascript';

document.getElementsByTagName('head')[0].appendChild(script);

$( () => {
    $('[data-toggle="popover"]').popover();
});

$( () => {
    $('[data-toggle="tooltip"]').tooltip();
});