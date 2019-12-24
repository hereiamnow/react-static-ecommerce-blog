/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/23/2019 01:44 AM
 * Relative Path: src/components/Blog/Widget/WidgetAccordion.js
 * Description: HTML & CSS based on Dotted HTML Blog layout.
 */

import React from "react";

class WidgetAccordion extends React.Component {
  render() {
    return (
      <div className="widget widget-accordion">
        <h3>Accordion</h3>
        <div
          className
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div className="panel panel-custom border-color-theme">
            <div className="panel-heading " role="tab" id="headingOne">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Cras Suscipit Pulvinar Dui Vitae
                </a>
              </h4>
            </div>
            <div
              id="collapseOne"
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="panel-body">
                Pellentesque eleifend euismod sapien non egestas. Donec ante
                sapien, semper tristique nulla vitae, porttitor consequat nisi.
              </div>
            </div>
          </div>
          <div className="panel panel-custom ">
            <div className="panel-heading " role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Morbi Ante Mi Commodo Nec Dignissim
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div className="panel-body">
                Pellentesque eleifend euismod sapien non egestas. Donec ante
                sapien, semper tristique nulla vitae, porttitor consequat nisi.
              </div>
            </div>
          </div>
          <div className="panel panel-custom ">
            <div className="panel-heading " role="tab" id="headingThree">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Nullam Tristique Scelerisque Felis Vel Tempor
                </a>
              </h4>
            </div>
            <div
              id="collapseThree"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div className="panel-body ">
                Pellentesque eleifend euismod sapien non egestas. Donec ante
                sapien, semper tristique nulla vitae, porttitor consequat nisi.
              </div>
            </div>
          </div>
          <div className="panel panel-custom ">
            <div className="panel-heading " role="tab" id="headingFour">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Vivamus Tempor Est In Tortor Faucibus, At Lacinia Libero
                </a>
              </h4>
            </div>
            <div
              id="collapseFour"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingFour"
            >
              <div className="panel-body ">
                Pellentesque eleifend euismod sapien non egestas. Donec ante
                sapien, semper tristique nulla vitae, porttitor consequat nisi.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WidgetAccordion;
