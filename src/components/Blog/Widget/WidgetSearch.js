/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 01:55 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/Widget/WidgetSearch.js
 * Description: A Responsive HTML and CSS site built for Gatsby :)
 */

import React from "react";

class WidgetSearch extends React.Component {
  render() {
    return (
      <div className="widget widget-search">
        <form className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              id="widgetsearch"
              placeholder="Type & Search..."
              type="email"
            />
          </div>
          <button type="button" className="reset-btn hover-text-theme">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default WidgetSearch;
