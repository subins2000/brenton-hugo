#!/bin/env bash

sass ./static/css/main.sass --style compressed > static/css/main.css
sass ./bulma.sass --style compressed > static/css/bulma.css
