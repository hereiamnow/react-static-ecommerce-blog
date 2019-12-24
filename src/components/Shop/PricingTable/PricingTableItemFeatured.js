import React from "react";

class PricingTableItemFeatured extends React.Component {
  render() {
    return (
      <div className="pricing-table featured">
        <header>
          <p className="title">Professional</p>
          <div className="price">
            <p className="value">$180.00</p>
            <p className="condition">Per Year</p>
          </div>
        </header>
        <div className="content">
          <p>
            Praesent eleifend, ipsum et maximus viverra, elit enim dictum elit.
          </p>
          <p />
          <ul>
            <li>
              <i className="fa fa-check-circle" /> <strong>Free</strong> setup
            </li>
            <li>
              <i className="fa fa-check-circle" /> <strong>Unlimited</strong>{" "}
              Bandwidth
            </li>
            <li>
              <i className="fa fa-check-circle" /> <strong>2.0%</strong>{" "}
              Transaction Fee
            </li>
            <li>
              <i className="fa fa-times-circle" /> <strong>100</strong> SKU
            </li>
            <li>
              <i className="fa fa-check-circle" /> <strong>10 Gb</strong>{" "}
              Storage
            </li>
          </ul>
          <p />
        </div>
        <footer>
          <p>
            <a
              href="#"
              className="ot-btn btn-main-color btn-rounded text-up white-text"
            >
              CHOOSE PLAN
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default PricingTableItemFeatured;
