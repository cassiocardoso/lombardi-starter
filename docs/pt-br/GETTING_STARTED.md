# Documentação `lombardi-starter`

## Sumário

- [Documentação `lombardi-starter`](#documentação-lombardi-starter)
	- [Sumário](#sumário)
	- [Visão Geral](#visão-geral)
	- [Customizando a Interface](#customizando-a-interface)
	- [Conectando com o Netlify CMS](#conectando-com-o-netlify-cms)
	- [Adicionando o seu conteúdo](#adicionando-o-seu-conteúdo)
	- [Dúvidas ou sugestões?](#dúvidas-ou-sugestões)

## Visão Geral

1. Clone esse repositório utilizando: `git clone --depth=1 https://github.com/cassiocardoso/lombardi-starter.git <YOUR_PROJECT_NAME>`
2. Entre no diretório que você acabou de clonar: `cd <YOUR_PROJECT_NAME>`.
3. Instale as dependencias: `npm install` or `yarn`.
4. Rode a aplicação: `npm run start` or `yarn start`.
   1. O front-end estará rodando em: `http://localhost:8000/`.
   2. A API GraphQL estará rodando em: `http://localhost:8000/___graphql`.
   3. O painel de admin (Netlify CMS) estará rodando em: `http://localhost:8000/admin/`.

## Customizando a Interface

Os componentes da interface utilizam a biblioteca [Tailwind CSS](https://tailwindcss.com/) que pode ser customizada no arquivo: `tailwind.config.js`. O projeto possui modelos para alguns componentes como header, cor de background, cor principal, tabelas, entre outros. Para customizar o tema, veja a [documentação oficial do Tailwind](https://tailwindcss.com/docs/configuration).

## Conectando com o Netlify CMS

Para editar o conteúdo do site, sem tocar no código, você precisará ter configurado o deploy da aplicação para o Netlify e, em seguida, configurar a autenticação através do GitHub. Os links abaixo são da documentação oficial do Gatsby e Netlify sobre como fazer isso (ambos em inglês).

- [Gatsby: Deploying to Netlify](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#deploying-to-netlify)
- [Authenticate users with Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

## Adicionando o seu conteúdo

O projeto usa dados fake para ilustrar o layout, páginas e os widgets.

Para utilizar o seu conteúdo, você tem 2 opções:

1. Editar os arquivos Markdown no diretório `content` manualmente;
2. Editar o conteúdo pela interface de admin (necessita conectar com o Netlify previamente)

## Dúvidas ou sugestões?

Check the [issue tracker](https://github.com/cassiocardoso/lombardi-starter/issues) to see if it's a known issue before creating a new ticket.
