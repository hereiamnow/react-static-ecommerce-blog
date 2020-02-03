/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 11/23/2019 7:41 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/SubHeader/SubHeader.jsx
 */

import React from 'react'
import {Link} from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const SubHeader =({location, title, crumbLabel, crumbLink})=> {
		return (
				<section id="subheader" className="no-padding sub-header-border">
					<Container>
						<Row>
							<div className="sub-header-warp">
								<h3 className="title-subheader">{title}</h3>
								<ol className="breadcrumb">
									<li>You are here:</li>
									<li><Link to={'/index'}>Home</Link></li>
									<li className="active"><Link to={crumbLink}>{crumbLabel}</Link></li>
								</ol>
							</div>
						</Row>
					</Container>
				</section>
		);
};

export default SubHeader
