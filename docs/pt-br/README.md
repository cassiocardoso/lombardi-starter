# Lombardi Starter

![](./logo.jpg)

> A starter website for football teams

**DEMO:** [Clique aqui para ver uma demo](https://lombardi-starter.netlify.app/)

## Funcionalidades

<dl>
	<dt><strong>Blog</strong></dt>
	<dd>Blog com paginação e navegação entre os posts por padrão. Os posts podem ser escritos em <em>Markdown</em> através do painel administrativo</dd>
	<dt><strong>Formulário de contato</strong></dt>
	<dd>Formulário de contato integrado utilizando o <a href="https://formspree.io/" target="_blank">Formspree</a>. Coloque o ID gerado no site do Formspree no campo <code>formspreeId</code> no arquivo <code>lombardi.config.js</code></dd>
	<dt><strong>CMS Integrado</strong></dt>
	<dd>O projeto vem com uma plataforma integrada para gerenciamento de conteúdo do site utilizando o <a href="https://www.netlifycms.org/" target="_blank">Netlify CMS</a>. Algumas das funcionalidades desenvolvidas são: blog, páginas institucionais como: sobre a equipre, lista de jogadores e tabela de jogos</dd>
	<dt><strong>Widgets</strong></dt>
	<dd>Alguns widgets já estão configurados no CMS para serem exibidos na página inicial e permitir uma fácil customização. São eles: partidas recentes, links para redes sociais, tabela de classificação</dd>
	<dt><strong>Extensível</strong></dt>
	<dd>As páginas e widgets podem ser customizados através da interface administrativa. Novas funcionalidades podem ser adicionadas com um pouco de conhecimento de programação</dd>
</dl>

## Primeiros passos

1. Clone esse repositório utilizando: `git clone --depth=1 https://github.com/cassiocardoso/lombardi-starter.git <YOUR_PROJECT_NAME>`
2. Entre no diretório que você acabou de clonar: `cd <YOUR_PROJECT_NAME>`.
3. Instale as dependencias: `npm install` or `yarn`.
4. Rode a aplicação: `npm run start` or `yarn start`.
   1. O front-end estará rodando em: `http://localhost:8000/`.
   2. A API GraphQL estará rodando em: `http://localhost:8000/___graphql`.
   3. O painel de admin (Netlify CMS) estará rodando em: `http://localhost:8000/admin/`.

Para instruções detalhadas, veja o [guia detalhado](./GETTING_STARTED.md)

### Contributors

Contribuições de qualquer tipo são muito bem-vindas, por favor leia as [orientações de contribuição](../../CONTRIBUTING.md) e o nosso [código de conduta](../../CODE_OF_CONDUCT.md)

### Licença

MIT license, Copyright (c) 2020 Cassio Cardoso.

Veja mais em [LICENSE](../../LICENSE).
