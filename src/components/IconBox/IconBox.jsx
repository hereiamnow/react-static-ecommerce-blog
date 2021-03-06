/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/07/2019 12:52 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * Relative Path: src/components/IconBox/IconBox.jsx
 */

import React from 'react'
import {Link} from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IconBox = (props) => (
		<section id="iconbox" className={"dskt-padding-55 " + props.color}>
			<Container>
				<Row>
					<div className="header-iconbox">
						<h3 className="text-cap text-center">WELCOME TO THE USVA</h3>
						<p className="text-center des-text">United States Vaping Association is a trade association whose purpose is to provide information and assistance to its members to combat unlawful government regulations, and to represent the vaping industry in the United States.</p>
					</div>
					<div className="iconbox-set-1-warp">
						<Col md={3}>
							<div className="iconbox iconbox-set-1">
								<div className="icon-1 bg-sub-color">
									<i className="fa fa-desktop color-theme" aria-hidden="true"> </i>
								</div>
								<h4 className="text-up">Counsel & Representation</h4>
								<i className="color-theme">Pellentesque Neque Eros Eget</i>
								<p>​​USVA and its legal counsel are dedicated to protecting the interests of the vaping industry and its Members.</p>
								<Link to="/" className="ot-btn btn-main-color btn-rounded text-up white-text">
									Know More <i className="fa fa-plus" aria-hidden="true"> </i>

								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="iconbox iconbox-set-1">
								<div className="icon-1 bg-sub-color">
									<i className="fa fa-briefcase color-theme" aria-hidden="true"> </i>
								</div>
								<h4 className="text-up">How Is USVA Different</h4>
								<i className="color-theme">Mauris Quam At Arcu Aliquet Sagittis</i>
								<p>Pellentesque neque eros, vulputateeget nunc et, consequat ornare. .</p>
								<a href="#" className="ot-btn btn-main-color btn-rounded text-up white-text">Know More <i className="fa fa-plus" aria-hidden="true"> </i>
								</a>
							</div>
						</Col>
						<Col md={3}>
							<div className="iconbox iconbox-set-1">
								<div className="icon-1 bg-sub-color">
									<i className="fa fa-wrench color-theme" aria-hidden="true"> </i>
								</div>
								<h4 className="text-up">How To Become A Member</h4>
								<i className="color-theme">Curabitur Dictum Eros Augue</i>
								<p>Sed porta, lectus id vestibulum feugiat, enim sapien dictum turpis</p>
								<Link to="/" className="ot-btn btn-main-color btn-rounded text-up white-text">
									Know More <i className="fa fa-plus" aria-hidden="true"> </i>

								</Link>
							</div>
						</Col>
						<Col md={3}>
							<div className="iconbox iconbox-set-1">
								<div className="icon-1 bg-sub-color">
									<i className="fa fa-users color-theme" aria-hidden="true"> </i>
								</div>
								<h4 className="text-up">Friendly Support</h4>
								<i className="color-theme">Non Cursus Neque Urna Vel</i>
								<p>Massa leo, vulputate nec consequat rhoncus, feugiat a enim..</p>
								<Link to="/" className="ot-btn btn-main-color btn-rounded text-up white-text">
									Know More <i className="fa fa-plus" aria-hidden="true"> </i>

								</Link>
							</div>
						</Col>
					</div>
				</Row>
			</Container>
		</section>
);

export default IconBox
