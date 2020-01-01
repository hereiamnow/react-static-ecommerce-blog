/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 01:46 AM
 * Relative Path: src/components/Blog/CategoryListing.jsx
 * Description: HTML & CSS based on Dotted HTML Blog layout.
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
									<Link to={"/categories/" + category}
											className="hover-text-theme">
										{category}
									</Link>
									<span className="count">0</span>
								</li>
						))}

						<li>
							<Link className="hover-text-theme">page totals: </Link>
							<span className="count">{data.allMarkdownRemark.totalCount}</span>
						</li>
					</ul>
				</div>
		)} />
);
export default CategoryListing;
