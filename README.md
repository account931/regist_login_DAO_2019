# Application that makes Registration and login authentication.
#Uses : DOA, singletone, PDO, PSR-4 autoload,




=========================================================
BROWSERIFY
CLI-> browserify js/my_js/common_js_modules/main.js > js/dist/js/bundle_js.js -d
CLI-> npm run watch-js    =watch changes without rebuild
                                         
add to packagist.json

 "scripts": {
    "build-js": "browserify js/my_js/common_js_modules/main.js > js/dist/js/bundle_js.js -d",
    "watch-js": "watchify js/my_js/common_js_modules/main.js -o js/dist/js/bundle_js.js -dv"
  },
 "devDependencies": {
    "browserify": "latest",
    "watchify": "latest"
  }

========================================================









=========================================================
Composer autoloader
This is Composer autoloader working example.
How to:
1."CLI-> composer init". It creates composer.json in folder.
2. Add ""autoload":" section to composer.json.
3. For PSR-4 autoload(classes with namespaces) add section { "psr-4": { "Cubet\\": "vendor" }, } . 
It says that classes with namespace {Cubet} should be loaded from folder {vendor}

5. For classes that don't fit PSR-4 (classes without namespace) add section {"classmap": ["library/"]}.
It says that non PSR-4 classes must be found in folder {library}

6. CLI-> $ composer dump-autoload -o      -> This CLI must be run after each composer edits to update the autoload.

=========================================================





[Scrolling Nav](http://startbootstrap.com/template-overviews/scrolling-nav/) is an unstyled one page starter template with a collapsing, smooth scrolling navigation bar for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

