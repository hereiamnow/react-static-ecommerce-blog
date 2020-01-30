/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:59 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/UserLinks/
 * Description: USVA Theme demo
 */

import React, { Component } from "react";
import "./UserLinks.scss";

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
