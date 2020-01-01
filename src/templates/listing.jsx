import React from 'react';
import config from '../../data/SiteConfig';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import SubHeader from '../components/SubHeader/SubHeader'
import SEO from '../components/SEO/SEO';
import PostListing from '../components/Blog/PostListing';
import Categories from '../components/Blog/CategoryListing';
import WidgetText from '../components/Blog/Widget/WidgetText';
import Cta from '../components/CTA/Action01';

class Listing extends React.Component {
	render () {
		const postEdges = this.props.data.allMarkdownRemark.edges;
		const ctaHeader = 'You can make a difference with your money.';
		const ctaBody = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. ';
		const ctaButton = 'MEMBERSHIP';
		const ctaUrl = '/membership';
		return (
				<Layout>
					<Helmet title={config.siteTitle} />
					<SEO />
					<SubHeader pageTitle={'Blog News | ' + config.siteTitle} breadcrumb="Blog Timeline" />
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
									{this.renderPaging()}
								</div>
							</div>
						</div>
					</section>
					<Cta header={ctaHeader} body={ctaBody} button={ctaButton} url={ctaUrl} />
				</Layout>
		);
	}

	renderPaging () {
		const {currentPageNum, pageCount} = this.props.pageContext;
		const prevPage = currentPageNum - 1 === 1 ? '/blog/' : `/blog/${currentPageNum - 1}/`;
		const nextPage = `/blog/${currentPageNum + 1}/`;
		const isFirstPage = currentPageNum === 1;
		const isLastPage = currentPageNum === pageCount;

		return (
				<ul className="pagination pagination-blog">

					{!isFirstPage && <li><Link to={prevPage}>Previous</Link></li>}

					{[...Array(pageCount)].map((_val, index) => {
						const pageNum = index + 1;
						return (
								<li>
									<Link key={`listing-page-${pageNum}`} to={pageNum === 1 ? '/blog/' : `/blog/${pageNum}/`}>
										{pageNum}
									</Link>
								</li>
						);
					})}

					{!isLastPage && <li><Link to={nextPage}>Next</Link></li>}

				</ul>
		);
	}

}

export default Listing;

export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM, DD, YYYY")
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
      totalCount
    }
  }
`;
