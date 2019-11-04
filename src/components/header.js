/** @jsx jsx */
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40vh;
    padding: 1rem;
    @media only screen and (min-width: ${breakpoints[1]}) {
      height: 100vh;
      padding-bottom: 6vh;
    }
  `;

  const DivTitle = styled.div`
    max-width: 15rem;
    padding: 0;
    text-align: center;
    @media only screen and (min-width: ${breakpoints[1]}) {
      max-width: 60%;
      padding-bottom: 3rem;
    }
    @media only screen and (min-width: ${breakpoints[2]}) {
      max-width: 50%;
    }
  `;

  const DivWords = styled.div`
    padding: 0.5rem 0;
    text-align: center;
    font-size: 1.7rem;
    /* transform: rotate(-5deg); */
    @media only screen and (min-width: ${breakpoints[1]}) {
      font-size: 3rem;
    }
  `;

  const H1 = styled.h1`
    font-size: 1.7rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: #fff;
    @media only screen and (min-width: ${breakpoints[1]}) {
      font-size: 3rem;
    }
    @media only screen and (min-width: ${breakpoints[2]}) {
      font-size: 4rem;
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
