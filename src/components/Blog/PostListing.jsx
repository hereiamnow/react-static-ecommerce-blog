import React from 'react';
import { Link } from 'gatsby';
import BlogSingleFeatureImg from './BlogSingleFeatureImg.js';

const _ = require('lodash');
const moment = require('moment');

class PostListing extends React.Component {

	getPostList () {
		const postList = [];
		this.props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.fields.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead,
				category: postEdge.node.frontmatter.category

			});
		});
		return postList;
	}

	render () {
		const postList = this.getPostList();
		return (
				<div>
					{/* Your post list here. */
						postList.map(post => (
								<div className="item-blog blog-single-feature-img">
									{/*Post Big Image*/}
									<div className="blog-feature-warp">
										<Link to={post.path} key={post.title}>
											<img src={post.cover} className="img-responsive" alt="Image" />
										</Link>
									</div>{/*eo blog-feature-warp*/}

									<div className="blog-feature-content">

										<div className="blog-feature-content-inner">

											<div className="blog-data">

												<div className="date-time bg-theme">

													{/*DATE-TIME * DAY/MONTH*/}
													<span className="date">15</span>
													<span className="month">MAY</span>

												</div>

												<div className="blog-type">
													{/*Small Image*/}
													<img src="http://placehold.it/20x24/CCC.png" className="img-responsive" alt="Image" />
												</div>

											</div>{/*eo blog-data*/}

											<div className="blog-text">
												<Link to={post.path} key={post.title}>
													<h4 className="hover-text-theme">{post.title}</h4>
												</Link>

												<p>{post.excerpt}</p>

												<Link to={post.path} key={post.title}
												      className="readmore hover-text-theme"> [read more] </Link>
											</div>{/*eo blog-text*/}
										</div>

										{/*Post Footer*/}
										<div className="blog-footer-2 border-color-theme">
											<ul>
												<li>
													Posted by{' '}
													<Link to={post.path} key={post.title} className="hover-text-theme"> Administrator </Link>
												</li>

												<li>
													Category:&nbsp;
													<span>
													<Link to={`/categories/${_.kebabCase(post.category)}/`} className="hover-text-theme">
													{post.category}</Link>
													</span>
												</li>

												<li>
													Tags:{' '} {post.tags.map(tag => (
														<span>&nbsp;<Link to={`/tags/${_.kebabCase(tag)}/`} className="hover-text-theme">{tag}</Link></span>
												))}
												</li>

												<li>
													{/*<Link to={post.path} key={post.title} className="hover-text-theme">*/}
														Time to Read:&nbsp;{post.timeToRead}&nbsp;mins
													{/*</Link>*/}
												</li>

											</ul>
										</div>{/*eo blog-footer-2*/}

									</div>

								</div>
						))}
				</div>
		);
	}
}

export default PostListing;
