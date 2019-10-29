import * as React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/**
 * Heart.
 */
export default function Heart(props: {}) {
  return (
    <span
      css={css`
        &:hover {
          color: red;
          cursor: default;
        }
      `}
    >
      ♥
    </span>
  )
}
