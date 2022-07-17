#!/bin/bash

node_modules/sass/sass.js ./static/css/main.sass --style compressed > static/css/main.css
node_modules/sass/sass.js ./static/css/bulma.sass --style compressed > static/css/bulma.css
