const config = {
	siteTitle: 'Gatsby Default Starter', // Site title.
	siteTitleShort: 'react-static-ecom-blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'react-static-ecom-blog', // Alternative site title for SEO.
	siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
	siteUrl: 'https://react-static-ecom-blog.netlify.com', // Domain of your website without pathPrefix.
	pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: 'A GatsbyJS stater with e-commerce and blog features.', // Website description used for RSS feeds/meta description tag.
	siteRss: '/rss.xml', // Path to the RSS file.
	siteFBAppID: '1825356251115265', // FB Application ID for using app insights
	companyTelephone : '+ 512-258-9999',
	companyFax : '+ 512-258-9999',
	emailSupport : 'support@theusva.org',
	emailMembership : 'membership@theusva.org',
	companySiteUrl : 'www.theusva.org',
	metaPageTitle : 'Site Demo',
	companyName : 'UNITED STATES VAPING ASSOCIATION (USVA)',
	companyAddress : '100 E Whitestone BLVD Austin, TX 78613',
	slogan : 'Build an advanced e-commerce and blog using gatsby and react',
	aboutText : 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
	urlTwitter : 'https://twitter.com/TheUsva',
	urlFacebook : 'https://www.facebook.com/TheUSVA',

	// These keys need to be changed
	googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
	paypalCredentialsSandbox: 'sb-zd43ob395816@business.example.com', // www...
	paypalCredentialsProduction: 'AbO5PIj8kw8t8UKOFpeoKGwu7O76Ej9Bo_zmIdFBVYu7X7ZZM561rxIAQQb0Du5YR7SFWqbb0u-4XtQp', // www...
	stripeSecretKey: 'sk_test_OxcRGXwa8vyXhvj34pOAKmjs', // www...
	gatsbyStripePublicKey: 'pk_test_dvbj8EdCZ1MSrA65EHRDCBtg',
	disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.

	postDefaultCategoryID: 'Category1', // Default category for posts.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	postsPerPage: 3, // Amount of posts displayed per listing page.
	userName: 'userName', // Username to display in the author segment.
	userEmail: 'userEmail@example.com', // Email used for RSS feed's author segment
	userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: 'Cedar Park, United States of America', // User location to display in the author segment.
	userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
	userDescription:
			'Black jack mizzenmast sloop fluke scuppers. Driver keel clap of thunder take a caulk spyglass. Spirits boom cable Brethren of the Coast yawl.', // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: 'Facebook',
			url: 'https://www.facebook.com/theusva',
			iconClassName: 'fa fa-facebook'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/theusva',
			iconClassName: 'fa fa-twitter'
		},
		{
			label: 'Email',
			url: 'mailto:support@theusva.org',
			iconClassName: 'fa fa-envelope'
		},
		{
			label: 'Source Code',
			url: 'https://github.com/hereiamnow/react-static-ecom-blog',
			iconClassName: 'fa fa-github'
		}
	],
	siteBuilt : 'This site built with Gatsby with all the love in the world.',
	copyright: 'Copyright © 2019. Shawn Miller', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#deb152', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = ''
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
	config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
	config.siteRss = `/${config.siteRss}`

module.exports = config
