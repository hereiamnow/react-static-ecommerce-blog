import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/Blog/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
/*import ListBlog from '../components/Blog/ListBlog';*/
/*import WidgetSearch from '../components/Blog/Widget/WidgetSearch';*/
import CategoryListing from '../components/Blog/Widget/CategoryListing';
/*import WidgetAccordion from '../components/Blog/Widget/WidgetAccordion';*/
/*import WidgetTabs from '../components/Blog/Widget/WidgetTabs';*/
import WidgetText from '../components/Blog/Widget/WidgetText';
import Cta from '../components/CTA/Action01'
import SubHeader from '../components/SubHeader/SubHeader'
/*import "./listing.css";*/

const ctaHeader = 'You can make a difference with your money.'
const ctaBody = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. '
const ctaButton = 'DONATE'
const ctaUrl = '/donate'

class Listing extends React.Component {

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

	render () {
		const postEdges = this.props.data.allMarkdownRemark.edges;

		return (
				<Layout>
					<Helmet title={config.siteTitle} />
					<SEO />
					<SubHeader pageTitle={config.companyName + ' Blog'} breadcrumb="Blog Timeline" />

					<section id="main-content">
						<div className="container">
							<div className="row">
								<div className="sidebar-page">
									<div id="sidebar" className="main-sidebar">
										{/*<WidgetSearch></WidgetSearch>*/}
										<CategoryListing postEdges={postEdges}/>
										{/*<WidgetAccordion></WidgetAccordion>*/}
										<WidgetText></WidgetText>
										{/*<WidgetTabs></WidgetTabs>*/}
									</div>
								</div>
								<div className="main-page">
									<PostListing postEdges={postEdges} />
									{this.renderPaging()}
								</div>
							</div>
						</div>
					</section>

					{/*Call to Action - Donate*/}
					<Cta header={ctaHeader} body={ctaBody} button={ctaButton} url={ctaUrl} />

				</Layout>
		);
	}
}

export default Listing;

/* eslint no-undef: "off" */
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
