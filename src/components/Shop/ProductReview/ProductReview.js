/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/17/2020 7:27 PM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Shop/ProductReview/ProductReview.js
 * Description:
 */

import React from 'react';
/*import PropTypes from 'prop-types';*/

const ProductReview = (props) => (
		<div className="review-product">
			<div className="comment-area review-warp">
				<h3 className="title">Reviews (3)</h3>
				<div className="comment-list-item">

					{/*Todo: Map item*/}
					<div className="comment-item com1">
						<div className="header-comment">
							<div className="avatar-comment">
								<img src="https://placehold.it/750x750/CCC.png" className="img-responsive" alt="Image"/>
							</div>
							<p className="author-name"> By Allen D.guggins</p>
							<p> 5 May, 2014</p>
							<div className="product-rate review-product-rate">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-half-o"></i>
							</div>
						</div>
						<div className="body-comment">
							<p>Fusce ultrices elit in rutrum auctor. Duis est eros, facilisis sit amet libero at, pharetra tristique nunc. Proin eget massa elit. Etiam vel lacinia nulla.
							   Etiam vel egestas enim. Nulla posuere arcu ipsum, non sagittis mi facilisis ut. Sed non ipsum quis purus viverra bibendum nec in augue.</p>
						</div>
					</div>{/*comment-item com1*/}
				</div>{/*comment-list-item*/}
			</div>{/*comment-area review-warp*/}
		</div>
);

/*ProductReview.propTypes = {
	prop1: PropTypes.string.isRequired,
	prop2: PropTypes.string.isRequired
};*/

export default ProductReview;
