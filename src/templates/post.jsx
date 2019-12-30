import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
/*import Footer from "../components/Footer/Footer";*/
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import CategoryListing from '../components/Blog/Widget/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';

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
	      <section id="main-content">
		      <div className="container">
			      <div className="row">
				      <div className="sidebar-page">
					      <div id="sidebar" className="main-sidebar">
						      {/*<CategoryListing> </CategoryListing>*/}
						      <WidgetText> </WidgetText>
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
					      {/*<Footer config={config} />*/}
				      </div>
			      </div>
		      </div>
	      </section>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
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
