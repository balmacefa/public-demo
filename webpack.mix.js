const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css')
//     .sass('resources/sass/datatables.scss', 'public/css');


mix.js('resources/js/buyer/react/react_buyer_app.js', 'public/js')
    // .sourceMaps()
    .react();

mix.js('resources/js/landing/react/lading_react_app.js', 'public/js')
    .react();


mix.postCss("resources/css/buyer/react/react_buyer_app.css", "public/css", [
    require("tailwindcss"),
]);

mix.version();
