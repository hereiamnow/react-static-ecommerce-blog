/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:20 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Team/
 * Description: USVA Theme demo
 */

import React from "react";
import TeamItem from "./TeamItem";

class TeamThreeCol extends React.Component {
  render() {
    return (
      <section className="bg-light-grey">
        <div className="container">
          <div className="row">
            <div className="team-warp-page team-3-col">
              <div className="col-md-12">
                <h3 className>Support Team 3 Columns</h3>
              </div>
              <div className="col-md-4">
                <TeamItem></TeamItem>
              </div>
              <div className="col-md-4">
                <TeamItem></TeamItem>
              </div>
              <div className="col-md-4">
                <TeamItem></TeamItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamThreeCol;
