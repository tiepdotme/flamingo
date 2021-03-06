import React, { Component } from "react";
import PageWrapper from "../PageWrapper";
import css from "../style.module.css";
import Media from "react-media";
import moment from "moment";

import SponsoredArticle from "components/SponsoredArticle";

class SponsoredLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SponsoredArticle
          headline={this.props.article.title.rendered}
          date={moment.utc(this.props.article.date)}
          authors={this.props.authors}
          categories={this.props.article["_embedded"]["wp:term"][0]}
          featureimg={
            this.props.article._embedded["wp:featuredmedia"] != undefined &&
            !this.props.article._embedded["wp:featuredmedia"].empty
              ? this.props.article._embedded["wp:featuredmedia"][0].source_url
              : ""
          }
          caption={
            this.props.article._embedded["wp:featuredmedia"] != undefined &&
            !this.props.article._embedded["wp:featuredmedia"].empty
              ? this.props.article._embedded["wp:featuredmedia"][0].caption
                  .rendered
              : ""
          }
          authorimg={
            this.props.article["_embedded"].author[0]["avatar_urls"][96]
          }
          content={this.props.article.content.rendered}
          acf={this.props.article.acf}
        />
      </>
    );
  }
}

export default SponsoredLayout;
