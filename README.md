[![Netlify Status](https://api.netlify.com/api/v1/badges/6e14b0bd-89b0-4ec4-bd54-30b6aad8c403/deploy-status)](https://app.netlify.com/sites/react-static-ecommerce-blog/deploys)

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
https://github.com/google-map-react/google-map-react/tree/master/src
https://medium.com/@kristin_baumann/react-countdown-6455838b6faf



# JAMstack e-commerce blog starter

This Project was forked from [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter)

A starter skeleton with advanced features for Gatsby.

Developed for creating modern websites.

Demo

A [Gatsby](https://github.com/gatsbyjs/gatsby/) starter e-commerce blog with advanced [features](#features) and pwa [(progressive web app)](https://developers.google.com/web/progressive-web-apps) 
capabilities.  Be sure to check out all the features of this starter in detail.

[Here is a demo](https://react-static-ecommerce-blog.netlify.com) hosted at Netlify.

### Features
- [JAMstack](https://jamstack.org/) / [Gatsby](https://www.gatsbyjs.org/) support
- Deploy to [Netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify), [AWS Amplify](https://www.gatsbyjs.org/docs/deploying-to-aws-amplify) , [GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/), [Surge.sh,](https://www.gatsbyjs.org/docs/deploying-to-surge/) [Aerobatic](https://www.gatsbyjs.org/docs/deploying-to-aerobatic/), [ZEIT Now](https://www.gatsbyjs.org/docs/deploying-to-zeit-now/) and others
- Fast pre-rendered HTML5 and automatic chunk loading of JS files thanks to [Gatsby v2](https://www.gatsbyjs.org/) 
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- **High configurability**
- [NetlifyCMS](https://www.netlifycms.org) support
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
  
#### SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
  - [RSS feeds](https://www.gatsbyjs.org/docs/adding-an-rss-feed/)

#### Ecommerce
- Paypal Support (comming soon)
- Stripe Support

#### Blog
- Blog Posts in Markdown
- Code syntax highlighting
- Embed YouTube videos
- Embed Tweets
- Pagination
  - Configurable via 'SiteConfig.js'
- Tags and Categories
  - *Separate page for posts under each tag and category*
- [Disqus](https://disqus.com/) support

#### Social 
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
  
#### React Components
  - SEO
  - TopBar 
  - Header
  - Footer
  - Blog
  - Social Links
  - Copyright
  - User Info
  - Subscribe
  - Testimonial
  
#### Development Tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration
  - [CodeClimate](https://codeclimate.com/) configuration file and badge









gatsby-plugin-breadcrumb












## Getting Started

Install this starter (assuming [git](https://git-scm.com/ "git"), [npm](https://www.npmjs.com/ "npm"), 
and  [Gatsby](https://github.com/gatsbyjs/gatsby/) are installed and updated) by running from the cli. 
Replace "ProjectName" with the name of your project.

```sh
$ gatsby new ProjectName https://github.com/hereiamnow/react-static-ecommerce-blog
$ npm run develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively you can clone the project.

```sh
$ git clone https://github.com/hereiamnow/react-static-ecommerce-blog ProjectName
$ cd Projectname
$ rm -rf .git # So you can have your own changes stored in VCS.
$ npm install
$ npm run develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  siteTitle: "JAMstack Starter", // Site title.
  siteTitleShort: "JAM Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "JAMstack Starter Alt", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://react-static-ecommerce-blog.netlify.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A JAMstack stater with e-commerce and blog design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml",   
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "animals", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 3, // Amount of posts displayed per listing page.
  userName: "UserName", // Username to display in the author segment.
  userEmail: "user@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "United States", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "Eaque ipsa quae ab illo inventore veritatis et quasi.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/hereiamnow/react-static-ecommerce-blog",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/hereiamnow",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:hereiamnow@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019 Shawn Miller", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#deb152", // Used for setting manifest and progress theme colors.
  backgroundColor: "#f5f5f5" // Used for setting manifest background color.
};
```

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js

import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
});
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-advanced-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
};
```

NOTE:  Make sure to edit `static/robots.txt` to include your domain for the sitemap!

`gatsby-config.js`

**plugins:**
- [gatsby-plugin-react-helmet](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet "gatsby-plugin-react-helmet")
- [gatsby-plugin-lodash](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-lodash "gatsby-plugin-lodash")
- [gatsby-plugin-stripe](https://github.com/njosefbeck/gatsby-plugin-stripe "gatsby-plugin-stripe")
- [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass "gatsby-plugin-sass")
- [gatsby-source-stripe](https://github.com/njosefbeck/gatsby-source-stripe "gatsby-source-stripe")
- [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem "gatsby-source-filesystem")
- [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark "gatsby-transformer-remark")
- [gatsby-remark-embed-video](https://github.com/borgfriend/gatsby-remark-embed-video "gatsby-remark-embed-video")
- [gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics "gatsby-plugin-google-analytics")
- [gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp "gatsby-plugin-sharp")
- [gatsby-transformer-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp "gatsby-transformer-sharp")
- [gatsby-plugin-catch-links](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links "gatsby-plugin-catch-links")
- [gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter "gatsby-plugin-twitter")
- [gatsby-plugin-sitemap](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap "gatsby-plugin-sitemap")
- [gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest "gatsby-plugin-manifest")
- [gatsby-plugin-netlify-cms](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify-cms "gatsby-plugin-netlify-cms")
- [gatsby-plugin-feed](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed "gatsby-plugin-feed")


		// In order to get production's app-ID, you will have to send your app to Paypal for approval first
		// For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section,
		// click "Create App" unless you have already done so):
		//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
		// Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
		// For production app-ID:
		//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

		// NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will
		// work!




Copyright 2019 Shawn Miller ([LinkedIn](https://linkedin.com/in/hereiamnow))
