/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 01:46 AM
 * Relative Path: src/components/Blog/Widget/WidgetCategory.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from 'react';
/*import { graphql } from 'gatsby/index';*/
import { StaticQuery, graphql, Link } from 'gatsby';

class CategoryListing extends React.Component {

	getCategoryList () {
		const categoryList = [];
		this.props.postEdges.forEach(postEdge => {
			categoryList.push({
				path: postEdge.node.fields.slug,
				category: postEdge.node.frontmatter.category
			});
		});
		return categoryList;
	}

	render () {
		const categoryList = this.getCategoryList();
		return (
				<div className="widget widget-category">
					<h3>Category</h3>
					<ul className="category">

						{/* Your post list here. */
							categoryList.map(category => (
									<li>
										<Link to="/categories/" className="hover-text-theme">
											{category.category}
										</Link>
										<span className="count">2</span>
									</li>
							))}
					</ul>
				</div>
		);
	}
}

export default CategoryListing;
