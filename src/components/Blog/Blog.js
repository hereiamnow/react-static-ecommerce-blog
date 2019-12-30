/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 12:29 AM
 * Relative Path: src/components/Blog/Blog.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from "react";
import ListBlog from "./ListBlog";
import PaginationBlog from "./PaginationBlog";
import WidgetSearch from "./Widget/WidgetSearch";
/*import CategoryListing from "./Widget/CategoryListing";*/
import WidgetTabs from "./Widget/WidgetTabs";
import WidgetAccordion from "./Widget/WidgetAccordion";
import WidgetText from "./Widget/WidgetText";

class Blog extends React.Component {
  render() {
    return (
      <section id="main-content">
        <div className="container">
          <div className="row">
            <div className="main-page">
              <ListBlog></ListBlog>
              <PaginationBlog></PaginationBlog>
            </div>
            <div className="sidebar-page">
              <div id="sidebar" className="main-sidebar">
                <WidgetSearch></WidgetSearch>
                {/*<CategoryListing></CategoryListing>*/}
                <WidgetTabs></WidgetTabs>
                <WidgetAccordion></WidgetAccordion>
                <WidgetText></WidgetText>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
