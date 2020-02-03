/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/09/2019 3:33 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo:
 * Relative Path: src/components/RecentBlog/RecentBlog.jsx
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

const options = {
	autoPlay: false, //Set AutoPlay to 3 seconds
	items: 3,
	itemsDesktop: [1199, 3],
	itemsDesktopSmall: [979, 3],
	itemsTablet: [768, 2],
	itemsMobile: [479, 1],
	pagination: true,
	navigation: false
};

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
			'thumbnailSmall': 'https://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'https://placehold.it/640x640/FFFAFA.png',
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
			'thumbnailSmall': 'https://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'https://placehold.it/640x640/FFFAFA.png',
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
			'thumbnailSmall': 'https://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'https://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}

/*		, {
			'id': '004',
			'month': 'NOV',
			'date': '13',
			'subTitle': 'Declaratory and Injunctive Relief requested',
			'title': 'United States District Court for the Southern District of Mississippi Southern Division',
			'postedBy': 'admin',
			'theText': 'Defendants have announced their intent to clear the market of more than 90% of the products Plaintiffs sell within 30 days of the announcement of a revised policy,and that announcement has been promised such that it may come at any moment now.',
			'fileURL': 'public/documents/435017530-111319-reply-usva.pdf',
			'thumbnailSmall': 'https://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'https://placehold.it/640x640/FFFAFA.png',
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
			'thumbnailSmall': 'https://placehold.it/20x24/FFFAFA.png',
			'thumbnailLarge': 'https://placehold.it/640x640/FFFAFA.png',
			'category': 'Litigation',
			'comments': '12'
		}*/
	];
}

export class RecentBlog extends React.Component {

	render () {


		return (
			<section id="blog" className={this.props.sectionTitle}>
				<Container>
					<Row>
						<Col md={12}>
							<div className="title-warp">
								<h3 className="title-landing">{this.props.sectionTitle}</h3>
							</div>
						</Col>

						<Col md={12}>
							<div className="blog-landing-warp">
								{/*Indicators*/}
								<ol className="carousel-indicators">
									<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
									<li data-target="#myCarousel" data-slide-to="1"></li>
									<li data-target="#myCarousel" data-slide-to="2"></li>
								</ol>
								<Carousel id="owl-blog-landing" className="">
									<Row>
											{/*Creates Column and Carousel*/}
											{getData().map(data => (

												<Col md={4}>
													<CarouselItem className="item" key={data.id}>

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
																	</div>/*blog-data*/

																	<div className="blog-text">
																		<a href="blog-single.html"><h4 className="hover-text-theme">{data.subTitle}</h4></a>
																		<p>{data.theText + '...'}</p>
																		<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
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
													</CarouselItem>
												</Col>

											))}
									</Row>





								</Carousel>

							</div>
							{/*blog-landing-warp*/}
						</Col>{/*column*/}
					</Row>{/*row*/}
				</Container>{/*container*/}
			</section>

		);
	}
}

export default RecentBlog;
