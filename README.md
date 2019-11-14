# Application that makes Registration and login authentication.
#Uses : DOA, singletone, PDO, PSR-4 autoload, namespace, composer, npm, browserify, watchify, Gulp, CommonJS, Git, GitHub

How it works:
1. Main (and the only) entry JS script is js/my_js/dist/js/bundle_js.js






=========================================================
BROWSERIFY, for more details see {account931/git-browserify-yii_commands_manuals/npm_browserify_commands.txt}
CLI-> browserify js/my_js/common_js_modules/main.js > js/my_js/dist/js/bundle_js.js -d
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
COMPOSER AUTOLOADER(and its vendor folder), for more details see {account931/miscellaneous_2018/composer_autoload/ReadMe.txt}
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








=========================================================

PURE CSS LOADER

Pure CSS loader, does not need placing any loader <div> code to index.php, just to javascript, \js\my_js\common_js_modules\modules\loader.js

1. In index.php wrap all content to some div, i.e <div id="all"> + add class="animate-bottom". This class will be used for animated div re-appearance.
2. Add css, by default <div id="all"> display:none.
3. In JS(\js\my_js\common_js_modules\modules\loader.js) add code, which append <div id="loaderX"> : {this.appendLoaderDiv();}
 Then, to same js file add logic that operates loader fadingOut: {var myVar = setTimeout(this.showPage, 1000);}
 
====

======================================================


==========================================================
Php NAMESPACE, see {account931/miscellaneous_2018/namespace_php/}
==========================================================

==========================================================
GIT, see {account931/git-browserify-yii_commands_manuals/README.md}
==========================================================

==========================================================
NPM packagist(and its node_modules folder), see {account931/git-browserify-yii_commands_manuals/npm_browserify_commands.txt}
==========================================================



[Scrolling Nav](http://startbootstrap.com/template-overviews/scrolling-nav/) is an unstyled one page starter template with a collapsing, smooth scrolling navigation bar for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

