import React, { Component } from "react";
import PageWrapper from "../PageWrapper";
import css from "../style.css";
import { SizeMe } from "react-sizeme";

import PhotoGallery from "../../components/PhotoGallery";

export default class PhotoGalleryLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PhotoGallery
          headline={this.props.post.title.rendered}
          photos={this.props.photos}
        />
      </div>
    );
  }
}
