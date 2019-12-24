/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 01:46 AM
 * Relative Path: src/components/Blog/Widget/WidgetCategory.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from "react";

class WidgetCategory extends React.Component {
  render() {
    return (
      <div className="widget widget-category">
        <h3>Category</h3>
        <ul className="category">
          <li>
            <a href="#" className="hover-text-theme">
              Web
            </a>
            <span className="count">2</span>
          </li>
          <li>
            <a href="#" className="hover-text-theme">
              Development
            </a>
            <span className="count">3</span>
          </li>
          <li>
            <a href="#" className="hover-text-theme">
              HTML
            </a>
            <span className="count">5</span>
          </li>
          <li>
            <a href="#">CSS</a>
            <span className="count">12</span>
          </li>
          <li>
            <a href="#" className="hover-text-theme">
              JavaScript
            </a>
            <span className="count">11</span>
          </li>
          <li>
            <a href="#" className="hover-text-theme">
              WordPress
            </a>
            <span className="count">7</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default WidgetCategory;
