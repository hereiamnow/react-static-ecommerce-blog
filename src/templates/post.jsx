import React from "react";
import config from "../../data/SiteConfig";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout/index";
import SEO from "../components/SEO/SEO";
import SubHeader from '../components/SubHeader/SubHeader';
import Categories from '../components/Blog/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';
import PostTags from "../components/Blog/PostTags";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import "./style/b16-tomorrow-dark.scss";
import "./style/post.scss";

/*const moment = require('moment');*/
/*const _ = require('lodash');*/

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>

	      <Helmet>
		      <title>{`${post.title} | ${config.siteTitle}`}</title>
	      </Helmet>

	      <SEO postPath={slug} postNode={postNode} postSEO />

	      <SubHeader
		      title={post.title}
		      crumbLabel="Categories" />

	      <section id="main-content">
		      <div className="container">
			      <div className="row">
				      <div className="sidebar-page">
					      <div id="sidebar" className="main-sidebar">
						      <Categories/>
						      <WidgetText/>
					      </div>
				      </div>
				      <div className="main-page">
					      <h1>{post.title}</h1>
					      <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
					      <div className="post-meta">
						      <PostTags tags={post.tags} />
						      <SocialLinks postPath={slug} postNode={postNode} />
					      </div>
					      <UserInfo config={config} />
					      <Disqus postNode={postNode} />
				      </div>
			      </div>
		      </div>
	      </section>

      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
