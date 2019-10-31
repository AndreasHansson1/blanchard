import React from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { useThemeUI } from 'theme-ui';

const GalleryItem = ({ images }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const ImgStyle = css`
    -webkit-filter: sepia(0.2);
    filter: sepia(0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media only screen and (min-width: ${breakpoints[2]}) {
      &:hover {
        z-index: 2;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        transform: scale(1.6);
      }
    }
  `;

  return images.map(image => (
    <div key={image.node.childImageSharp.fluid.src}>
      <Img
        css={ImgStyle}
        fluid={image.node.childImageSharp.fluid}
        alt='Image of apartment'
      />
    </div>
  ));
};

export default GalleryItem;
