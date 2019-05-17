# NextStart

⚠️⚠️⚠️ CAN'T BE USED UNTIL SOMEBODY FOUND A GOOD SOLUTION TO INTEGRATE NEXTJS W/ NETLIFY CMS ⚠️⚠️⚠️

[![Netlify Status](https://api.netlify.com/api/v1/badges/bed95772-4c9e-4877-adf3-bd566e828c2e/deploy-status)](https://app.netlify.com/sites/nextstart/deploys)

Kickstart for NextJS projects.

## Features

- Aliases
- Webpack config (css & sass modules)
- Store using [rematch](https://github.com/rematch/rematch/)
- Basic components (header & link)
- Shopify API test
- Export
- Server and URL slugs
- Router events for loading bar

## Working on

- Netlify CMS
- PageTransitions (based on [next-page-transitions](https://github.com/illinois/next-page-transitions) but with GSAP and external TransitionControllers based on (my) `Houdini` 🧙‍♂️) 🔜 [dev here](https://github.com/bastienrobert/nextstart/tree/feature/page-transitions)

## Woops

- Don't forget to upgrade to `next@8.0.4`, currently we're on `8.0.4-canary.11` to fix links issues
- exportPathMap const should be in a global conf file
