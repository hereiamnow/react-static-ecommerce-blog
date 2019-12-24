import React from "react";

class TeamItem extends React.Component {
  render() {
    return (
      <div className="team-item">
        <div className="team-item-img-container">
          <Link href="team-single.html">
            <img
              src="http://placehold.it/400x400/ccc.jpg"
              className="img-responsive"
              alt="Image"
            />
          </Link>
          <div className="overlay-1 hover-border-theme">
            <Link href="team-single.html">
              <i className="fa fa-link hover-border-theme " />
            </Link>
            <Link
              className="single-img-popup"
              href="http://placehold.it/400x400/ccc.jpg"
            >
              <i className="fa fa-expand hover-border-theme " />
            </Link>
          </div>
        </div>
        <a href="#">
          <h4 className="team-name hover-text-theme">Michael G. Calderon</h4>
        </a>
        <p className="team-job color-theme "> Marketing</p>
        <p className="team-info ">
          Sed fringilla diam vel commodo tempor.Aenean in tristique purus.
          Quisque necest massa.
        </p>
        <div className="team-social-warp border-color-theme">
          <a href="#" className="hover-text-theme">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
          <a href="#" className="hover-text-theme">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
          <a href="#" className="hover-text-theme">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </div>



      </div>
    );
  }
}

export default TeamItem;
