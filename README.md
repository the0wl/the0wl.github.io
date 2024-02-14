
# the0wl.github.io

> Este repositório utiliza a estrutura do GithubPages para construir um portifólio.

</br></br>

<table align="center">
  <tr>
    <td>
      <img src="/public/images/icons8-coruja-90.png" alt="logo">
    </td>
    <td>
      <span><b>the0wl</b></span>
      <span><b>Studio Code</b></span>
    </td>
  </tr>
</table>

</br>

## 📕 Introdução

O portifólio simula a interação com a IDE fictícia the0wl Studio Code. Nada mais justo que o portifólio de um dev ser escrito em uma IDE, para se parecer uma IDE. 

</br>

## 🧙‍♂️ Funcionalidades

Ainda não temos nada de especial como um VSCode, mas você pode navegar pelos arquivos 🤭.

</br>

## ⚒️ TO-DO

Ainda tem trabalho pela frente, mas nem Deus terminou seu trabalho em um dia:

  - [ ] Melhorar a interação com resoluções de telas baixas.
  - [ ] Adicionar interface mobile.
  - [ ] Resolver pequenos bugs visuais.

</br>

## 🚀 CI/CD com Github Actions

Caso esteja pensando em clonar este projeto, tome um tempo e veja o arquivo `build.yml` em `./.github/workflows/`. 

Alguns pontos importantes são as linhas:
  - `23` `26` `31` `34` `37` (sempre verifique a versão mais recente da action)
  - `47` (valide se você está utilizando as branch correta como referencia)
  - Certifique-se que na aba de configurações das Actions do repositório esteja definido como `Read and write permissions`.
  - O repositório GithubPages também deve estar configurado para construir o website baseado na branch `gh-pages`.

```yml
name: deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/master'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
