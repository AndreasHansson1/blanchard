import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const HeroStyle = css`
  box-shadow: 0 0 20px 20px white inset;
  position: relative;
  -webkit-filter: sepia(0.2);
  filter: sepia(0.2);
`;

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "terrace-outside.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      css={HeroStyle}
      fluid={data.file.childImageSharp.fluid}
      alt="Terrace View"
    />
  );
};
export default HeroImage;
