/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:30 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Team/Team2.js
 * Description: USVA Theme demo
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TeamItem from './TeamItem';

class TeamFourCol extends React.Component {
	render () {
		return (
			<section>
				<Container><Row>
					<div className="team-warp-page team-4-col">
						<Col md={12}> <h3>Our Development Team</h3> </Col>
						<Col md={3}> <TeamItem></TeamItem> </Col>
						<Col md={3}> <TeamItem></TeamItem> </Col>
						<Col md={3}> <TeamItem></TeamItem> </Col>
						<Col md={3}> <TeamItem></TeamItem> </Col>
					</div>
				</Row></Container>
			</section>
		);
	}
}

export default TeamFourCol;
