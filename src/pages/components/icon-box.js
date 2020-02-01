/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 1/31/2020 10:47 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: ${FILE_NAME}
 * Description:
 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../layout/layout1';
import SubHeader from '../../components/SubHeader';

const IconBoxView = () => (
	<Layout>

		<Helmet>
			<title>Component Demo</title>
			<meta name="description" content="" />
			<meta name="Keywords" content="React, ReactJs, Gatsby" />
			<meta name="robots" content="index, nofollow, noarchive" />
		</Helmet>

		<SubHeader title="Component View" breadcrumb="Icon Boxes" />

		<section id="main-content">
			<div className="container">
				<div className="row">
					<div className="main-page-icon-box">
						<h3>Icon Box Set 1</h3>
						<div className="iconbox-set-1-warp">
							<div className="col-md-3">
								<div className="iconbox iconbox-set-1">
									<div className="icon-1">
										<i className="fa fa-desktop color-theme " aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Fresh &amp; Clean Design</h4>
									<i className="color-theme">Pellentesque Neque Eros Eget</i>
									<p>Etiam tempus rutrum suscipit.Maecenas a imperdiet sapien.</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
							<div className="col-md-3">
								<div className="iconbox iconbox-set-1">
									<div className="icon-1">
										<i className="fa fa-briefcase color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Big Portfolio</h4>
									<i className="color-theme">Mauris Quam At Arcu Aliquet Sagittis</i>
									<p>Pellentesque neque eros, vulputateeget nunc et, consequat ornare. .</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
							<div className="col-md-3">
								<div className="iconbox iconbox-set-1">
									<div className="icon-1">
										<i className="fa fa-wrench color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Easy To Customize</h4>
									<i className="color-theme">Curabitur Dictum Eros Augue</i>
									<p>Sed porta, lectus id vestibulum feugiat, enim sapien dictum turpis</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
							<div className="col-md-3">
								<div className="iconbox iconbox-set-1">
									<div className="icon-1">
										<i className="fa fa-users color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Friendly Support</h4>
									<i className="color-theme">Non Cursus Neque Urna Vel</i>
									<p>Massa leo, vulputate nec consequat rhoncus, feugiat a enim..</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div className="div70"></div>
						<h3>Icon Box Set 2</h3>
						<div className="iconbox-set-2-warp">
							<div className="col-md-4 wow fadeIn" data-wow-delay=".45s">
								<div className="iconbox iconbox-set-2">
									<div className="icon-1">
										<i className="fa fa-desktop color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Fresh &amp; Clean Design</h4>
									<p className="sub-text">Pellentesque Neque Eros Eget</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
							<div className="col-md-4 wow fadeIn" data-wow-delay=".55s">
								<div className="iconbox iconbox-set-2">
									<div className="icon-1">
										<i className="fa fa-briefcase color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Big Portfolio</h4>
									<p className="sub-text">Mauris Quam At Arcu Aliquet</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
							<div className="col-md-4 wow fadeIn" data-wow-delay=".65s">
								<div className="iconbox iconbox-set-2">
									<div className="icon-1">
										<i className="fa fa-wrench color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Easy To Customize</h4>
									<p className="sub-text">Curabitur Dictum Eros Augue</p>
									<a href="#" className="ot-btn btn-main-color btn-rounded text-up">Know More <i className="fa fa-plus" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div className="div70"></div>
						<h3>Icon Box Set 3</h3>
						<div className="iconbox-set-3-warp iconbox-set-3-demo">
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-line-chart color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Mauris Blandit Erat </h4>
									<p>Curabitur a sagittis felis. Aenean ut ligula erat. Quisque vitae risus diam.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-briefcase color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">vitae ornare risus vestibulum</h4>
									<p>Nullam eu dui cursus, pellentesque risus at, ornare augue eleifend dui a lectus.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-bar-chart color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Vestibulum ante ipsum primis</h4>
									<p>Sed ac imperdiet tellus. Mauris dictum dui lacus, varius rutrum mauris commodo et.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-calendar color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Nulla lacinia sem at mauris </h4>
									<p>Maecenas condimentum gravida lorem vel posuere. In hac habitasse platea dictumst.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-cog color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Pellentesque nec tellus</h4>
									<p>Ut in urna et turpis rhoncus euismod ac vel arcu. Aliquam hendrerit nunc nec suscipit hendrerit.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="iconbox-set-3">
									<div className="icon-2  border-color-theme">
										<i className="fa fa-lightbulb-o color-theme" aria-hidden="true"></i>
									</div>
									<h4 className="text-up">Proin lacinia id mi et</h4>
									<p>Donec faucibus metus a tincidunt molestie. Cras placerat justo nisl.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>

	</Layout>
);

export default IconBoxView;