/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 8:18 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/UserInfo/
 * Description: USVA Theme demo
 */

import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return (
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    );
  }
}

export default UserInfo;
