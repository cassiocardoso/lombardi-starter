# `lombardi-starter` documentation

## Table of Contents

- [`lombardi-starter` documentation](#lombardi-starter-documentation)
	- [Table of Contents](#table-of-contents)
	- [Overview](#overview)
	- [UI Customization](#ui-customization)
	- [Connecting with Netlify CMS](#connecting-with-netlify-cms)
	- [Adding your content](#adding-your-content)
	- [Issues or requests?](#issues-or-requests)

## Overview

1. Clone this repo using `git clone --depth=1 https://github.com/cassiocardoso/lombardi-starter.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Install all the dependencies: `npm install` or `yarn`.
4. Run the application: `npm run start` or `yarn start`.
   1. The application will be running on: `http://localhost:8000/`.
   2. The GraphQL will be running on: `http://localhost:8000/___graphql`.
   3. Netlify CMS is running at `http://localhost:8000/admin/`.

## UI Customization

The UI framework of choice is Tailwind CSS and customization can be done in the `tailwind.config.js`. The starter comes with basic styling for some components like the header, background and some other widgets. You can use the `tailwind.config.js` to extend the basic theme and customize it to match your needs.

## Connecting with Netlify CMS

To edit your website content, without touching the code, you'll need to configure Netlify to deploy your website and then configure the authentication with GitHub, so data is saved to your repo. Check the following links for detailed information on both processes:

- [Gatsby: Deploying to Netlify](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#deploying-to-netlify)
- [Authenticate users with Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

## Adding your content

The starter comes with some mocked data to show how the components works, replace the data with your own using the `admin` dashboard.

To replace the data you have two options:

1. Remove the markdown files from the `content` directory;
2. Update the content using the admin dashboard (if you already connected with Netlify CMS)

## Issues or requests?

Check the [issue tracker](https://github.com/cassiocardoso/lombardi-starter/issues) to see if it's a known issue before creating a new ticket.
