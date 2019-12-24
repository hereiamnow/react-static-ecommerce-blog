import React from "react";

class PricingTableItem extends React.Component {
  render() {
    return (
      <div className="pricing-table">
        <header>
          <p className="title">Standard</p>
          <div className="price">
            <p className="value">$120.00</p>
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
              <i className="fa fa-times-circle" /> <strong>Unlimited</strong>{" "}
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
              <i className="fa fa-check-circle" /> <strong>1 Gb</strong> Storage
            </li>
          </ul>
          <p></p>
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
          <p />
        </footer>
      </div>
    );
  }
}

export default PricingTableItem;
