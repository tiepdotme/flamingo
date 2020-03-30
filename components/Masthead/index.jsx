import * as React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Link from "next/link";

import Media from "react-media";
import * as globals from "../globals";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default class Masthead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedCategories = [];
    if (this.props.categories != null) {
      for (let i in this.props.categories) {
        renderedCategories.push(
          <a
            href={this.props.categories[i].as}
            css={css`
              display: table-cell;
              text-align: center;
              padding: 8px 4px;
              font-family: ${globals.menuFont};
              font-size: 18px;
              font-weight: bold;
              text-decoration: none;
              text-transform: uppercase;
              color: #ffffff;
              white-space: nowrap;
              &:hover {
                text-decoration: underline;
              }

              &.isSticky {
                background-color: red;
              }
            `}
          >
            {this.props.categories[i].name}
          </a>
        );
      }
    }
    return (
      <Media
        queries={{
          phone: "(max-width: 600px)",
          desktop: "(min-width: 601px)"
        }}
        defaultMatches={{ desktop: true }}
      >
        {matches => (
          <>
            {matches.phone && <Mobile {...this.props}></Mobile>}
            {matches.desktop && <Desktop {...this.props}></Desktop>}
          </>
        )}
      </Media>
    );
  }
}
