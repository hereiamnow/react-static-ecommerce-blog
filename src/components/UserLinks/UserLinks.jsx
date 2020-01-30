import React, { Component } from "react";
import "./style.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link, index) => (
      <a href={link.url} key={index}>
        <button type="button" key={link.label}>
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
