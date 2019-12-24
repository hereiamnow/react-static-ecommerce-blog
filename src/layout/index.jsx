import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
	        <link
			        rel="stylesheet"
			        href="css/bootstrap/3.3.6/bootstrap.css"
			        type="text/css"/>
	        <link
			        href="https://fonts.googleapis.com/css?family=Oswald:400,700,300"
			        rel="stylesheet"
			        type="text/css"
	        />
	        <link
			        href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic"
			        rel="stylesheet"
			        type="text/css"
	        />
	        <link
			        rel="stylesheet"
			        href="css/fonts/font-awesome/css/font-awesome.min.css"
			        type="text/css"
	        />
	        <link
			        rel="stylesheet"
			        href="layerslider/css/layerslider.css"
			        type="text/css"
	        />
	        <link
			        rel="stylesheet"
	                href="css/owl.carousel/owl.carousel.css"
	                type="text/css"
	        />
	        <link
			        rel="stylesheet"
			        href="css/site/style.css" />

	        <link
			        rel="shortcut icon"
			        href="favicon.png" />
        </Helmet>
        {children}
      </div>
    );
  }
}
