const config = {
	siteTitle: "Gatsby E-commerce Blog Starter",
	siteTitleShort: "Gatsby Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "react-static-ecommerce-blog alt", // Alternative site title for SEO.
	siteLogo: "/logos/logo-1024.png",
	siteUrl: "https://react-static-ecommerce-blog.netlify.com",
	pathPrefix: "/",
	siteDescription: "A GatsbyJS stater with e-commerce and blog features.",
	siteRss: "/rss.xml",
	siteFBAppID: "1825356251115265",
	companyTelephone : '+ 512-258-9999',
	companyFax : '+ 512-258-9999',
	emailSupport : 'support@theusva.org',
	emailMembership : 'membership@theusva.org',
	companySiteUrl : 'https://react-static-ecommerce-blog.netlify.com',
	metaPageTitle : 'Site Demo',
	companyName : 'United States Vaping Association (USVA)',
	companyAddress : '100 E Whitestone Blvd Cedar Park, Tx 78613',
	slogan : 'The gene pool could use a little chlorine',
	aboutText : 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
	urlTwitter : 'https://twitter.com/TheUsva',
	urlFacebook : 'https://www.facebook.com/TheUSVA',
	googleAnalyticsID: "UA-47311644-5",
	paypalCredentialsSandbox: 'sb-zd43ob395816@business.example.com',
	paypalCredentialsProduction: 'AbO5PIj8kw8t8UKOFpeoKGwu7O76Ej9Bo_zmIdFBVYu7X7ZZM561rxIAQQb0Du5YR7SFWqbb0u-4XtQp',
	stripeSecretKey: 'sk_test_OxcRGXwa8vyXhvj34pOAKmjs',
	gatsbyStripePublicKey: 'pk_test_dvbj8EdCZ1MSrA65EHRDCBtg',
	disqusShortname: 'react-static-ecommerce-blog-1.disqus.com', // Disqus shortname.
	postDefaultCategoryID: "Animals",
	dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
	dateFormat: "DD/MM/YYYY", // Date format for display.
	postsPerPage: 3, // Amount of posts displayed per listing page.
	userName: "Administrator", // Username to display in the author segment.
	userEmail: "administrator@example.com", // Email used for RSS feed's author segment
	userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: "United States", // User location to display in the author segment.
	userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
	userDescription: "Black jack mizzenmast sloop fluke scuppers. Driver keel clap of thunder take a caulk spyglass. Spirits boom cable Brethren of the Coast yawl.",
	userLinks: [
		{
		  label: "Twitter",
		  url: "https://twitter.com/hereiamnow",
		  iconClassName: "fa fa-twitter"
		},
		{
		label: 'Facebook',
		url: 'https://www.facebook.com/theusva',
		iconClassName: 'fa fa-facebook'
		},
		{
		  label: "Email",
		  url: "mailto:hereiamnow@gmail.com",
		  iconClassName: "fa fa-envelope"
		},
		{
		label: "GitHub",
		url: "https://github.com/hereiamnow/react-static-ecommerce-blog",
		iconClassName: "fa fa-github"
		},
	],
	copyright: "Copyright © 2019 Shawn Miller",
	themeColor: "#deb152",
	backgroundColor: "#f5f5f5"
};

// Validate
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") {
	config.siteUrl = config.siteUrl.slice(0, -1);
}

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/") {
	config.siteRss = `/${config.siteRss}`;
}

module.exports = config;
