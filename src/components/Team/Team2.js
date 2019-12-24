import React from "react";
import TeamItem from "./TeamItem";

class TeamFourCol extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="team-warp-page team-4-col">
              <div className="col-md-12">
                <h3>Development Team 4 Columns</h3>
              </div>
              <div className="col-md-3">
                <TeamItem></TeamItem>
              </div>
              <div className="col-md-3">
                <TeamItem></TeamItem>
              </div>
              <div className="col-md-3">
                <TeamItem></TeamItem>
              </div>
              <div className="col-md-3">
                <TeamItem></TeamItem>
              </div>
            </div>
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default TeamFourCol;
