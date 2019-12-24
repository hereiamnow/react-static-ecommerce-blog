import React from "react";

class PaginationBlog extends React.Component {
  render() {
    return (
      <ul className="pagination pagination-blog">
        <li>
          <a href="#">FIRST</a>
        </li>
        <li>
          <a href="#">BACK</a>
        </li>
        <li>
          <a href>1</a>
        </li>
        <li className="active">
          <span>2</span>
        </li>
        <li>
          <a href>3</a>
        </li>
        <li>
          <a href>...</a>
        </li>
        <li>
          <a href>5</a>
        </li>
        <li>
          <a href="#"> FORWARD ></a>
        </li>
        <li>
          <a href="#">LAST » </a>
        </li>
      </ul>
    );
  }
}

export default PaginationBlog;
