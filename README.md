# Brenton

Brenton is a [Hugo](https://gohugo.io) theme.

This theme is made for [my blog](https://subinsb.com).

## Development

### Requirements

* [SASS](https://sass-lang.com/install)
* Bulma

Do a `npm install` to install the dependencies

### Editing

SASS files are in `static/css`

To compile SASS to CSS, run :

```bash
bash build.sh
```

To compile CSS automatically when SASS files are changed, run this :

```bash
while inotifywait -e close_write static/css/; do bash ./build.sh; done
```

`inotify-tools` package is required for this (`sudo apt install inotify-tools`)

### Gallery

Image gallery made by [Li-Wen Yip](https://github.com/liwenyip/hugo-easy-gallery) is included in this theme.