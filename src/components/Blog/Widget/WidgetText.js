/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 02:02 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/Widget/WidgetText.js
 * Description: A Responsive HTML and CSS site built for Gatsby :)
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
