import React from 'react';
import config from '../../data/SiteConfig';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/index';
import SubHeader from '../components/SubHeader/SubHeader';
import PostListing from '../components/Blog/PostListing';
import Categories from '../components/Blog/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';
import Cta from '../components/CTA/Action01';

export default class CategoryTemplate extends React.Component {
	render () {
		const {category} = this.props.pageContext;
		const postEdges = this.props.data.allMarkdownRemark.edges;
		const ctaHeader = 'You can make a difference with your money.';
		const ctaBody = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. ';
		const ctaButton = 'MEMBERSHIP';
		const ctaUrl = '/membership';

		return (
				<Layout>

					<Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />

					<SubHeader title={`Posts in category "${category}" | ${config.siteTitle}`}
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
									<PostListing postEdges={postEdges} />
								</div>
							</div>
						</div>
					</section>

					<Cta header={ctaHeader} body={ctaBody} button={ctaButton} url={ctaUrl} />

				</Layout>
		);
	}
}

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
            date(formatString: "MMMM, DD, YYYY")
            category
          }
        }
      }
    }
  }
`;
