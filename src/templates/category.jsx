import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';
import CategoryListing from '../components/Blog/Widget/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';

export default class CategoryTemplate extends React.Component {
	render () {
		const {category} = this.props.pageContext;
		const postEdges = this.props.data.allMarkdownRemark.edges;
		return (
				<Layout> <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
					<section id="main-content">
						<div className="container">
							<div className="row">
								<div className="sidebar-page">
									<div id="sidebar" className="main-sidebar">
										{/*<CategoryListing></CategoryListing>*/}
										<WidgetText></WidgetText>
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

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
