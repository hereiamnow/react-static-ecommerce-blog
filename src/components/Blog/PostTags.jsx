/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 01:32 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/PostTags.jsx
 * Description: A Responsive HTML and CSS site built for Gatsby :)
 */

import React, { Component } from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import './style/BlogData.scss';

class PostTags extends Component {
	render () {
		const {tags} = this.props;
		return (
			<div className="post-tag-container">
				{tags &&
				tags.map(tag => (
					<Link key={tag} style={{textDecoration: 'none'}} className={'ot-btn btn-main-color btn-rounded text-up white-text'} to={`/blog/tags/${_.kebabCase(tag)}`}>{tag}
						<i className="fa fa-tag" aria-hidden="true"> </i> </Link>
				))}
			</div>
		);
	}
}

export default PostTags;
