import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Map = () => {
  const context = useThemeUI();
  const {
    theme: { borderRadius, boxshadow }
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

  const A = styled.a`
    img {
      width: 100%;
      height: 100%;
      min-height: 15rem;
      filter: sepia(0);
      position: relative;
    }

    div {
      width: 100%;
      height: 100%;
      position: relative;
    }
  `;

  const Button = styled.button`
    position: absolute;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 173, 158, 1);
    color: #fff;
    padding: 10px 20px;
    border: none;
    font: 16px georgia, serif;
    ${borderRadius};
    ${boxshadow};
    margin-left: auto;
    z-index: 4;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 173, 158, 0.8);
    }
  `;
  return (
    <A
      title='Google Map'
      href='https://www.google.com/maps/d/u/0/viewer?mid=1rbx0n65ngD1IssLAUlAVDPRH2ouzz8lG&ll=45.86561089999999%2C7.7292956&z=17'
    >
      <div>
        {/* <Overlay /> */}
        <Img
          id='map'
          fluid={data.file.childImageSharp.fluid}
          alt='Google Map Champoluc Apartment Location'
          title='Map Champoluc'
        />
        <Button
          type='button'
          onclick="location.href='https://www.google.com/maps/d/u/0/viewer?mid=1rbx0n65ngD1IssLAUlAVDPRH2ouzz8lG&ll=45.86561089999999%2C7.7292956&z=17'"
        >
          Go to map
        </Button>
      </div>
    </A>
  );
};

export default Map;
