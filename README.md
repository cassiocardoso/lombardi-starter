# Lombardi Starter

> A starter website for football teams

## Features

<dl>
	<dt><strong>Blog</strong></dt>
	<dd>The starter contains a blog structure out of the box, with pagination e navigation between posts</dd>
	<dt><strong>Contact</strong></dt>
	<dd>A contact form powered by [Formspree](https://formspree.io/). Add the ID generated on their website on the `lombardi.config.js` file</dd>
	<dt><strong>CMS Integration</strong></dt>
	<dd>The starter comes with a CMS integrated using the [Netlify CMS](https://www.netlifycms.org/). Some of the functionalities are: blog, institutional pages like: about us, players list, and schedule.</dd>
	<dt><strong>Widgets</strong></dt>
	<dd>Some widgets are already configured on the CMS: recent matches, standings, menu, hero, and social profiles.</dd>
	<dt><strong>Extensible</strong></dt>
	<dd>The functionalities can be extended using the Netlify CMS.</dd>
</dl>

## Getting started

1. Clone this repo using `git clone --depth=1 https://github.com/cassiocardoso/lombardi-starter.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Install all the dependencies: `npm install` or `yarn`.
4. Run the application: `npm run start` or `yarn start`.
   1. The application will be running on: `http://localhost:8000/`.
   2. The GraphQL will be running on: `http://localhost:8000/___graphql`.
   3. Netlify CMS is running at `http://localhost:8000/admin/`.

For detailed docs, check the [starter documentation](./docs/README.md).

### Contributors

Contributors of any kind are welcome, please check our [contributing guideline]().

### License

This project is licensed under the MIT license, Copyright (c) 2020 Cassio Carodos. For more information see LICENSE.md.
