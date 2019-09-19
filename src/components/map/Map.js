import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Map = () => {
  const context = useThemeUI();
  const {
    theme: { borderRadius, boxshadow },
  } = context;
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const Button = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: lightgrey;
    padding: 10px 20px;
    border: none;
    font: 16px georgia, serif;
    ${borderRadius};
    ${boxshadow};
    margin-left: auto;
    z-index: 50;
    cursor: pointer;
    :hover {
      background: darkgrey;
    }
  `;
  return (
    <a
      style={{ position: 'relative' }}
      href="https://www.google.com/maps/d/u/0/viewer?mid=1rbx0n65ngD1IssLAUlAVDPRH2ouzz8lG&ll=45.86561089999999%2C7.7292956&z=17"
    >
      {/* <Overlay /> */}
      <Img
        id="map"
        fluid={data.file.childImageSharp.fluid}
        alt="Google Map"
        title="Map"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '15rem',
          maxHeight: '30rem',
          filter: 'sepia(0)',
        }}
      />
      <Button
        type="button"
        onclick="location.href='https://www.google.com/maps/d/u/0/viewer?mid=1rbx0n65ngD1IssLAUlAVDPRH2ouzz8lG&ll=45.86561089999999%2C7.7292956&z=17'"
      >
        Go to map
      </Button>
    </a>
  );
};

export default Map;
