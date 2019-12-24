import React from "react";
import BlogSingleFeatureImg from "./BlogSingleFeatureImg";
import BlogVideoPopup from "./BlogVideoPopup";
import BlogGalleryFeatureImg from "./BlogGalleryFeatureImg";
import BlogFeatureAudio from "./BlogFeatureAudio";

class ListBlog extends React.Component {
  render() {
    return (
      <div id="list-blog" className="list-blog-warp">
        <BlogSingleFeatureImg/>
        <BlogVideoPopup/>
        <BlogGalleryFeatureImg/>
        <BlogFeatureAudio/>
      </div>
    );
  }
}

export default ListBlog;
