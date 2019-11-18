import * as React from "react";
import Link from "next/link";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as globals from "../globals";
import * as locals from "./locals";
import * as utilities from "./utilities";

export default function Vert(props) {
  //  collect authors
  const authors = utilities.collectAuthors(props.authors);
  return (
    <div
      css={css`
        display: block;
        padding: 10px;
        box-shadow: ${globals.cardShadow};
        background-color: #ffffff;
      `}
    >
      <Link href={props.href} as={props.as}>
        <a href={props.as} style={{ textDecoration: "none" }}>
          <div
            css={css`
              padding-top: 66.66%;
              width: 100%;
              overflow: hidden;
              position: relative;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
              src={props.imageurl}
            />
          </div>
        </a>
      </Link>
      <h4
        css={css`
          margin: 2px 0;

          font-family: Arimo;
          font-style: normal;
          font-weight: normal;
          font-size: 8px;
          text-align: right;

          color: #000000;
        `}
      >
        {props.photographer}
      </h4>
      <span>
        <Link href={props.category.href} as={props.category.as}>
          <a
            href={props.category.as}
            css={css`
              text-decoration: none;
              color: ${globals.DBblue};
              vertical-align: middle;

              &:hover {
                text-decoration: underline;
              }
            `}
          >
            <h2
              css={css`
                margin: 0;
                font-family: Source Sans Pro;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                text-transform: uppercase;
                display: inline;
              `}
            >
              {props.category.name}
            </h2>
          </a>
        </Link>
        <span
          css={css`
            margin: 0;
            vertical-align: middle;
          `}
        >
          &nbsp;|&nbsp;
        </span>
        <span
          css={css`
            margin: 0;
            font-family: Source Sans Pro, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 14px;
          `}
        >
          {utilities.date2string(props.date)}
        </span>
      </span>
      <Link href={props.href} as={props.as}>
        <a href={props.as} style={{ textDecoration: "none" }}>
          <h1
            css={css`
              margin: 2px 0 4px;
              ${locals.headline}
            `}
            dangerouslySetInnerHTML={{ __html: props.headline }}
          />
          <p
            css={css`
              margin: 0 0 5px;
              ${locals.excerpt}
            `}
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
        </a>
      </Link>
      <h3
        css={css`
          margin: 0;

          font-family: Arimo;
          font-style: normal;
          font-weight: bold;
          font-size: 11px;

          color: #000000;
        `}
      >
        By {authors}
      </h3>
    </div>
  );
}