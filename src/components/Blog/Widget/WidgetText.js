/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 02:02 AM
 * Relative Path: src/components/Blog/Widget/WidgetText.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from "react";
import { Link } from 'gatsby'

class WidgetText extends React.Component {
  render() {
    return (
      <div className="widget widget-text">
        <h3>This is a Text Widget</h3>
        <p>This is a Text Widget that is located in the <strong>components/blog/widgets</strong> folder. Donec justo ligula, eleifend pharetra tincidunt sed, scelerisque sit
          amet elit. Aenean libero purus, eleifend at mauris id, fermentum condimentum lectus.
        </p>
        <Link to="/"
          className="ot-btn btn-main-color btn-rounded text-up white-text">
          Know More <i className="fa fa-plus" aria-hidden="true" />
        </Link>
      </div>
    );
  }
}

export default WidgetText;
