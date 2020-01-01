import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./style/post-tags.css"

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              className={'ot-btn btn-main-color btn-rounded text-up white-text'}
              to={`/tags/${_.kebabCase(tag)}`}
            >{tag} <i className="fa fa-tag" aria-hidden="true"> </i>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
