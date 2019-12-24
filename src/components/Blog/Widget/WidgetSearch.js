/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 01:55 AM
 * Relative Path: src/components/Blog/Widget/WidgetSearch.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
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
