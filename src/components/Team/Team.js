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
