import React from "react";
import BlogSingleFeatureImg from "./types/BlogSingleFeatureImg";
import BlogVideoPopup from "./types/BlogVideoPopup";
import BlogGalleryFeatureImg from "./types/BlogGalleryFeatureImg";
import BlogFeatureAudio from "./types/BlogFeatureAudio";

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
