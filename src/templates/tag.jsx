import React from 'react';
import config from '../../data/SiteConfig';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SubHeader from '../components/SubHeader/SubHeader';
import Categories from '../components/Blog/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';
import PostListing from '../components/Blog/PostListing';

export default class TagTemplate extends React.Component {
	render () {
		const {tag} = this.props.pageContext;
		const postEdges = this.props.data.allMarkdownRemark.edges;
		return (
				<Layout>
					<Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
					<SubHeader pageTitle={`Posts tagged as category "${tag}" | ${config.siteTitle}`} breadcrumb="Tags" />
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
									<PostListing postEdges={postEdges} />
								</div>
							</div>
						</div>
					</section>
				</Layout>
		);
	}
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
