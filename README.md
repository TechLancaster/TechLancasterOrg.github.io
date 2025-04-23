## View Site

[https://techlancaster.org/](https://techlancaster.org/)

## Local Dev

This website is a based on a static site generater called [Hugo](https://gohugo.io/)

Key directories to modify `content`, `layout`, and `static`.

### Environment Setup

https://gohugo.io/installation/

```
brew install hugo
npm i postcss
```

### Local Server

```
hugo server -D
```

Visit http://localhost:1313/ to view your local version of the site.

### Deploy

Once your PR is merged this [Github Action](https://github.com/TechLancaster/TechLancaster.github.io/blob/main/.github/workflows/hugo.yml) will deploy the site

### Misc Tips

`budparr.language-hugo-vscode` is a nice vscode extension
