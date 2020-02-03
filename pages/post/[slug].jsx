import PageWrapper from "../../layouts/PageWrapper";
import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { Config } from "../../config.js";

import PostLayout from "../../layouts/Post";

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const postRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    const post = await postRes.json();
    return { post };
  }
  componentDidMount() {
    if (
      this.props.post[0].acf["db_link"] != null &&
      this.props.post[0].acf["db_link"] != ""
    ) {
      location.replace(this.props.post[0].acf["db_link"]);
    }
  }
  render() {
    return <PostLayout article={this.props.post[0]} />;
  }
}

export default PageWrapper(Post);
