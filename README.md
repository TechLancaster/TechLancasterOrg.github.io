## Local Dev

This website is a based on a static site generater called [Hugo](https://gohugo.io/)

Key directories to modify `content`, `layout`, and `static`.

### Environment Setup

https://gohugo.io/installation/

```
brew install hugo
npm install postcss-cli
```

### Local Server

```
hugo server -D
# http://localhost:1313/
```

### Deploy

Once your PR is merged this [Github Action](https://github.com/TechLancaster/TechLancaster.github.io/blob/main/.github/workflows/hugo.yml) will deploy the site

### Misc Tips

`budparr.language-hugo-vscode` is a nice vscode extension
