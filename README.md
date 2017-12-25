# Brenton

Brenton is a [Hugo](https://gohugo.io) theme.

This theme is made for [my blog](https://subinsb.com).

## Development

To compile SASS to CSS, run :

```bash
bash build.sh
```

To compile CSS automatically when SASS files are changed, run this :

```bash
while inotifywait -e close_write static/css/; do bash ./build.sh; done
```
