# `lombardi-starter` documentation

## Table of Contents

- [`lombardi-starter` documentation](#lombardi-starter-documentation)
	- [Table of Contents](#table-of-contents)
		- [Overview](#overview)
		- [Customization](#customization)

### Overview

1. Clone this repo using `git clone --depth=1 https://github.com/cassiocardoso/lombardi-starter.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Install all the dependencies: `npm install` or `yarn`.
4. Run the application: `npm run start` or `yarn start`.
   1. The application will be running on: `http://localhost:8000/`.
   2. The GraphQL will be running on: `http://localhost:8000/___graphql`.
   3. Netlify CMS is running at `http://localhost:8000/admin/`.

### Customization

The UI framework of choice is Tailwind CSS and customization can be done in the `tailwind.config.js`. The starter comes with basic styling for some components like the header, background and some other widgets. You can use the `tailwind.config.js` to extend the basic theme and customize it to match your needs.
