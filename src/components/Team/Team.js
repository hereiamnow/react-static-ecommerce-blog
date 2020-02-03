/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:20 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Team/
 * Description: USVA Theme demo
 */

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TeamItem from "./TeamItem";

class TeamThreeCol extends React.Component {
  render() {
    return (
      <section className="bg-light-grey">
        <Container>
          <Row>
            <div className="team-warp-page team-3-col">
              <Col md={12}>
                <h3 className>Support Team 3 Columns</h3>
              </Col>
              <Col md={4}>
                <TeamItem></TeamItem>
              </Col>
              <Col md={4}>
                <TeamItem></TeamItem>
              </Col>
              <Col md={4}>
                <TeamItem></TeamItem>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default TeamThreeCol;
