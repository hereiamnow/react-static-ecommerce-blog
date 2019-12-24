/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 02:02 AM
 * Relative Path: src/components/Blog/Widget/WidgetTabs.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from "react";

class WidgetTabs extends React.Component {
  render() {
    return (
      <div className="widget widget-tabs">
        <ul className="nav nav-tabs tab1 tab2">
          <li className="active">
            <a href="#date" data-toggle="tab">
              <h4>
                <i className="fa fa-calendar" aria-hidden="true" />
              </h4>
            </a>
          </li>
          <li>
            <a href="#feature" data-toggle="tab">
              <h4>
                <i className="fa fa-star" aria-hidden="true" />
              </h4>
            </a>
          </li>
          <li>
            <a href="#comment" data-toggle="tab">
              <h4>
                <i className="fa fa-comments-o" aria-hidden="true" />
              </h4>
            </a>
          </li>
        </ul>
        <div className="tab-content tab-content-1 tab-content-2">
          <div className="tab-pane active" id="date">
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Sed Nulla Metus...</h4>
                </a>
                <p>Cras Suscipit Pulvinar Dui Vitae...</p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Interdum Malesuada...</h4>
                </a>
                <p>Phasellus vel pulvinar nibh, laoreet...</p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Sed Fringilla Diam...</h4>
                </a>
                <p>Mauris blandit pulvinar odio non...</p>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="feature">
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Morbi Ante..</h4>
                </a>
                <p className="rate">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Nullam TristiqueFelis...</h4>
                </a>
                <p className="rate">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Vivamus Tempor...</h4>
                </a>
                <p className="rate">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="comment">
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Vitae Ullamcorper ...</h4>
                </a>
                <p>I think this's very...</p>
                <p>
                  by <i>Adam D. Staling</i>
                </p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">Vivamus Ed...</h4>
                </a>
                <p>Lorem Ipsum...</p>
                <p>
                  by <i>John M. Doe</i>
                </p>
              </div>
            </div>
            <div className="item-blog-sidebar">
              <div className="blog-feature-warp">
                <img
                  src="http://placehold.it/200x200/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
              <div className="blog-feature-content">
                <a href="blog-single.html">
                  <h4 className="hover-text-theme">In Placerat..</h4>
                </a>
                <p>Dora Lano Ed Ipsum...</p>
                <p>
                  by <i>Joan O. Jackson</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default WidgetTabs;
