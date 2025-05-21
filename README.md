# cracker moon 🌔

A [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) [Markdown](https://www.markdownguide.org/getting-started/) editor [plugin](https://randombits.dev/standard-notes/installing-extensions#plugin-introduction) for [Standard Notes](https://standardnotes.com)

- uses HackerNoon's [rich-markdown-editor](https://github.com/hackernoon/rich-markdown-editor).
- inspired by the original SN rich markdown editor plugin [sn-rme](https://github.com/arturolinares/sn-rme).
- bootstrapped with [sn-extension-template](https://github.com/nienow/sn-extension-template)

## install

Navigate to `Account settings` -> `Plugins`. Scroll to `Install Custom Plugin` and enter

```curl
https://steamwings.github.io/cracker-moon/ext.json
```

## update

Same as install. You may need to restart the app for the new version to be used.

## development

For every PR

- Update the [changelog](CHANGELOG.md)

For every release

- Update the `version` in [package.json](package.json)

### Run demo

```sh
pnpm run start
```

### Serve local.json to Standard Notes

```sh
npm install -g http-server # Run once
http-server dist/ -p 8080 --cors
```

### Test on mobile

You may be able to serve over your local WAN using a URL like

```url
http://192.168.50.185:8080/local.json
```

You will also need to change the URLs in public/local.json and rebuild `pnpm run build`.
