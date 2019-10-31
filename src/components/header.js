/** @jsx jsx */
import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useWindowSize } from '../hooks/useWindowSize';
import BackgroundImage from 'gatsby-background-image';
import Logo from './Logo';
import WordChange from './WordChange';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const windowHeight = useWindowSize().height;
  const height = windowHeight - 50;

  useScrollPosition(({ currPos }) => {
    if (currPos.y < `-${height}`) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header-image/mountain.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const StyledHeader = styled.header`
    width: 100%;
    height: 30vh;
    padding: 0;
    @media only screen and (min-width: ${breakpoints[1]}) {
      height: 100vh;
    }
  `;

  const DivTitle = styled.div`
    /* background-color: lightblue; */
    max-width: 70%;
    padding: 0;
    text-align: center;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (min-width: ${breakpoints[1]}) {
      top: 50vh;
      transform: translate(-50%, -50%);
    }
  `;

  const DivWords = styled.div`
    /* background-color: lightblue; */
    padding: 0;
    text-align: center;
    position: absolute;
    top: 14rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;

    @media only screen and (min-width: ${breakpoints[1]}) {
      top: 72vh;
      transform: translate(-50%, -50%);
      font-size: 4rem;
    }
  `;

  const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
    margin-bottom: 2px;
    color: #fff;

    @media only screen and (min-width: ${breakpoints[1]}) {
      font-size: 5rem;
    }
  `;

  const imageData = [
    'linear-gradient(rgba(25,25,112, 0.3), rgba(25,25,112, 0.1))',
    data.file.childImageSharp.fluid
  ];

  const StickyHeader = styled.div`
    @media only screen and (min-width: ${breakpoints[1]}) {
      height: 50px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 5;
      position: fixed;
      top: 0;
    }
  `;

  return (
    <>
      <BackgroundImage
        fluid={imageData}
        backgroundColor='transparent'
        alt='Mountains'
      >
        <StyledHeader sticky={sticky}>
          <DivTitle>
            <H1>
              <strong>Champoluc</strong> apartment for rent
            </H1>
          </DivTitle>
          <DivWords>
            <WordChange />
          </DivWords>
        </StyledHeader>
      </BackgroundImage>
      <Logo sticky={sticky} />
      {sticky && <StickyHeader sticky={sticky}></StickyHeader>}
    </>
  );
};

export default Header;
