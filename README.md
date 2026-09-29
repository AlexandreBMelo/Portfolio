# Portfólio — Alexandre Melo

Site estático em HTML, CSS e JavaScript, preparado para o GitHub Pages. Inclui português e inglês, quatro projetos com detalhes expansíveis, áreas de atuação, certificações e contato.

## Visualizar

Abra `index.html` no navegador. Não é necessário instalar dependências ou compilar. Para visualizar com um servidor local, execute `python -m http.server 8000` nesta pasta e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie `index.html`, `styles.css`, `script.js`, `favicon.svg` e `.nojekyll` para a raiz da branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main** e a pasta **/ (root)**. Clique em **Save**.
5. Aguarde a publicação. O endereço aparecerá nessa mesma tela.

Os caminhos são relativos, funcionando tanto em `usuario.github.io` quanto em `usuario.github.io/nome-do-repositorio/`.

## Editar

- `index.html`: estrutura da página e conteúdo inicial em português.
- `styles.css`: cores, fontes, espaçamentos e versões para celular e impressão.
- `script.js`: textos dos dois idiomas, conteúdo completo dos projetos e seletor de idioma. Ao alterar um texto principal, atualize também seu equivalente no HTML.
- `favicon.svg`: ícone da aba.

A preferência de idioma é lembrada neste navegador. O conteúdo é traduzido localmente, sem serviços de tradução ou chaves de API. As fontes DM Sans e Manrope são carregadas do Google Fonts; caso não carreguem, o site usa fontes do sistema. As ilustrações dos cartões são decorativas e não representam capturas dos projetos.

## Fonte do conteúdo

Textos públicos da [página original no Notion](https://lavish-leopon-d2f.notion.site/Portf-lio-Alexandre-Melo-3eaf2b0929b3800c9ba6d9d1676c2931) e das quatro páginas de projetos vinculadas, consultadas em 29/09/2026. O conteúdo profissional em português foi preservado, com tradução para inglês. Propriedades administrativas do Notion (data de criação e campos vazios) não são exibidas.
