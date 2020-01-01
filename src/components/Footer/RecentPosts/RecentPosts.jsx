/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 12:29 AM
 * Relative Path: src/components/Footer/RecentPosts/recentPosts.jsx
 * Description: Component is a child of the Footer component.
 */

/* Based on Dotted HTML template. See copyrights in readme.md */
import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import './style.scss'

const RecentPosts = () => (
		<StaticQuery query={graphql`
            query recentPostsQuery {
				allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
				    totalCount
				    edges {
				      node {
				        id
				        fields {
				          date(fromNow: true)
				          slug
				        }
				        timeToRead
				        excerpt(pruneLength: 60)
				        frontmatter {
				          category
				          cover
				          tags
				          title
				          date
				          slug
				        }
				      }
				    }
				  }
				}
        `} render={(data) => (
				<div className="widget widget-footer widget-footer-blog">
					<div className="title-warp">
						<h3 className="title-inline">Recent Blog Posts</h3>

						<div className="customNavigation customNavigation-3">

							{/*font-awesome chevron-up chevron-down*/}

							<a className="btn-1 prev-blog2 hover-border-theme hover-text-theme">
								<i className="fa fa-chevron-down" /></a>

							<a className="btn-1 next-blog2 hover-border-theme hover-text-theme">
								<i className="fa fa-chevron-up" /></a>
						</div>

					</div>

					<div className="blog2-warp">
						<div className="slider8">
							{data.allMarkdownRemark.edges.map(postEdge => (

							<div className="blog2-item" key={postEdge.node.id}>

								<Link to={postEdge.node.fields.slug} className="blog2-img">
									<img src="/images/Blog/footer01.jpg" className="img-responsive" alt="Image" />
								</Link>

								<div className="blog2-detail">
									<Link to={postEdge.node.fields.slug} >
										<h3 className="hover-text-theme">{postEdge.node.frontmatter.title}</h3>
									</Link>
									<p>{postEdge.node.excerpt}</p>
									<p className="post-date">{'Posted: ' + postEdge.node.fields.date}</p>
								</div>

							</div>
							))}

						</div>

					</div>

					<Link to="/blog"
							className="ot-btn btn-main-bg bg-theme btn-rounded white-text"> READ BLOG </Link>

				</div>
		)} />
);

export default RecentPosts;



