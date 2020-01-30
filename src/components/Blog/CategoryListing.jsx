/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 01:46 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/CategoryListing.js
 * Description: A Responsive HTML and CSS site built for Gatsby :)
 */

import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const CategoryListing = () => (
		<StaticQuery query={graphql`
            query staticQuery {
                allMarkdownRemark {
                    totalCount
                    distinct(field: frontmatter___category)
                }
            }
        `} render={(data) => (
				<div className="widget widget-category">
					<h3>Category</h3>
					<ul className="category">
						{data.allMarkdownRemark.distinct.map(category => (
								<li key={category}>
									<Link to={"/blog/categories/" + category}
											className="hover-text-theme">
										{category}
									</Link>
									<span className="count">0</span>
								</li>
						))}
					</ul>
				</div>
		)} />
);
export default CategoryListing;
