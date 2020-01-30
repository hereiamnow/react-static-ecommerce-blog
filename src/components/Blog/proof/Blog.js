/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 12:29 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/proof/Blog.js
 * Description: A Responsive HTML and CSS site built for Gatsby :)
 */

import React from "react";
import ListBlog from "./ListPostTypes";
import PaginationBlog from "./PaginationBlog";
import WidgetSearch from "../Widget/WidgetSearch";
import WidgetTabs from "../Widget/WidgetTabs";
import WidgetAccordion from "../Widget/WidgetAccordion";
import WidgetText from "../Widget/WidgetText";

class Blog extends React.Component {
  render() {
    return (
      <section id="main-content">
        <div className="container">
          <div className="row">
            <div className="main-page">
              <ListBlog/>
              <PaginationBlog/>
            </div>
            <div className="sidebar-page">
              <div id="sidebar" className="main-sidebar">
                <WidgetSearch/>
                <WidgetTabs/>
                <WidgetAccordion/>
                <WidgetText/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
