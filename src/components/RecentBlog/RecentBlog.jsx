/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/09/2019 3:33 PM
 * Relative Path: src/components/RecentBlog/RecentBlog.jsx
 * Description: Based on Dotted HTML template
 */

import React from 'react'

const options = {
	autoPlay: false, //Set AutoPlay to 3 seconds
	items: 3,
	itemsDesktop: [1199, 3],
	itemsDesktopSmall: [979, 3],
	itemsTablet: [768, 2],
	itemsMobile: [479, 1],
	pagination: true,
	navigation: false
}

function getData () {
	return [
		{
			'id': '001',
			'month': 'OCT',
			'date': '06',
			'subTitle': 'Support of Motion to Dismiss',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'Shawn Miller',
			'theText': 'Congress may delegate discretion to the Executive if it supplies an intelligible principle: by defining the general policy, the official to whom authority is delegated, and the limits of the delegated authority',
			'fileURL': 'documents/433909258-20191106-mtd-memo.pdf',
			'thumbnailSmall': 'http://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'http://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}, {
			'id': '002',
			'month': 'OCT',
			'date': '23',
			'subTitle': 'Oral Argument Requested',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'admin',
			'theText': 'Defendants have announced their intent to clear the market of more than 90% of the products Plaintiffs sell within 30 days of the announcement of a revised policy,and that announcement has been promised such that it may come at any moment now.',
			'fileURL': 'documents/431916164-20191023-response-in-oppo-to-govt.pdf',
			'thumbnailSmall': 'http://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'http://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}, {
			'id': '003',
			'month': 'NOV',
			'date': '13',
			'subTitle': 'Declaratory and Injunctive Relief requested',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'admin',
			'theText': 'Defendants have announced their intent to clear the market of more than 90% of the products Plaintiffs sell within 30 days of the announcement of a revised policy,and that announcement has been promised such that it may come at any moment now.',
			'fileURL': 'public/documents/435017530-111319-reply-usva.pdf',
			'thumbnailSmall': 'http://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'http://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}, {
			'id': '004',
			'month': 'NOV',
			'date': '13',
			'subTitle': 'Declaratory and Injunctive Relief requested',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'admin',
			'theText': 'Defendants have announced their intent to clear the market of more than 90% of the products Plaintiffs sell within 30 days of the announcement of a revised policy,and that announcement has been promised such that it may come at any moment now.',
			'fileURL': 'public/documents/435017530-111319-reply-usva.pdf',
			'thumbnailSmall': 'http://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'http://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}, {
			'id': '005',
			'month': 'NOV',
			'date': '13',
			'subTitle': 'Declaratory and Injunctive Relief requested',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'admin',
			'theText': 'Defendants have announced their intent to clear the market of more than 90% of the products Plaintiffs sell within 30 days of the announcement of a revised policy,and that announcement has been promised such that it may come at any moment now.',
			'fileURL': 'public/documents/435017530-111319-reply-usva.pdf',
			'thumbnailSmall': 'http://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'http://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}
	]
}

export class RecentBlog extends React.Component {

	render () {
		console.log(this.props)
		return (

				<section id="blog" className="bg-light-grey">

					<div className="container">

						<div className="row">

							<div className="col-md-12">
								<div className="title-warp">
									<h3 className="title-landing">{this.props.sectionTitle}</h3>
								</div>


							</div>{/*column*/}

							<div className="col-md-12">

								<div className="blog-landing-warp">

									<div id="owl-blog-landing" className="owl-carousel owl-theme owl-blog-landing ">

										{/*ITEM*/}

											{/*<div className="item"></div>*/}

											{getData().map(data => (

													<div className="item" key={data.id}>

														<div className="item-blog blog-single-feature-img">

															<div className="blog-feature-warp">
																<img src={data.thumbnailLarge} className="img-responsive" alt="Image" />
															</div>

															<div className="blog-feature-content">

																<div className="blog-feature-content-inner">

																	<div className="blog-data">
																		<div className="date-time bg-theme">
																			<span className="date">{data.date}</span>
																			<span className="month">{data.month}</span>
																		</div>
																		<div className="blog-type">
																			<img src={data.thumbnailSmall} className="img-responsive" alt="Image" />
																		</div>
																	</div>

																	<div className="blog-text">

																		<a href="blog-single.html">
																			<h4 className="hover-text-theme">{data.subTitle}</h4>
																		</a>

																		<p>{data.theText + '...'}</p>

																		<a href="blog-single.html"
																		   className="readmore hover-text-theme">[read more]
																		</a>
																	</div>
																</div>
																<div className="blog-footer-2 border-color-theme">
																	<ul>
																		<li>Posted by <a className="hover-text-theme">{data.postedBy}</a></li>
																		<li>{data.category}</li>
																		<li>Comment {data.comments}</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
											))}	{/*END ITEM*/}

									</div>

								</div>{/*blog-landing-warp*/}

							</div>{/*column*/}

						</div>{/*row*/}

					</div>{/*container*/}

				</section>

		)
	}
}

export default RecentBlog
