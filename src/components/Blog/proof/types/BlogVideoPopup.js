/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/23/2019 12:50 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Blog/proof/types/BlogVideoPopup.js
 * Description: A Responsive HTML and CSS site built for Gatsby :)
 */

import React from "react";

class BlogVideoPopup extends React.Component {
  render() {
    return (
      <div className="item-blog blog-video-popup">
        <div className="blog-feature-warp">
          <a
            href="https://www.youtube.com/watch?v=Pr6C5QP3S7c"
            className="popup-youtube overlay-btn-video"
          ></a>
          <img
            src="https://placehold.it/350x250/ccc.jpg"
            className="img-responsive"
            alt="Image"
          />
        </div>
        <div className="blog-feature-content">
          <div className="blog-feature-content-inner">
            <div className="blog-data">
              <div className="date-time bg-theme">
                <span className="date">15</span>
                <span className="month">MAY</span>
              </div>
              <div className="blog-type">
                <img
                  src="https://placehold.it/24x24/ccc.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </div>
            </div>
            <div className="blog-text">
              <a href="blog-single.html">
                <h4 className="hover-text-theme">Video Post</h4>
              </a>
              <p>
                Vimeo & Youtube... Nunc cursus semper urna ut iaculis. Quisque
                elementum, nisl vitae egestas iaculis, est leo placerat libero,
                in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum
                dolor sit amet, consectetur adipiscing elitnisl vitae egestas
                iaculis,...
              </p>
              <a href="blog-single.html" className="readmore hover-text-theme">
                [read more]
              </a>
            </div>
          </div>
          <div className="blog-footer-2 border-color-theme">
            <ul>
              <li>
                Posted by{" "}
                <a href="#" className="hover-text-theme">
                  admin
                </a>
              </li>
              <li>
                On{" "}
                <a href="#" className="hover-text-theme">
                  Web,
                </a>{" "}
                <a href="#" className="hover-text-theme">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover-text-theme">
                  Comment 12
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogVideoPopup;
