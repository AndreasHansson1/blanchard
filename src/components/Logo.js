/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { scale, rotate, translate } from '../styles/KeyFrames';

const Logo = () => {
  const FirstLetter = styled.p`
    display: inline-block;
    font-size: 3.375rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    color: #fff;
    font-weight: 400;
    animation-name: ${translate};
    animation-duration: 350ms;
    animation-delay: 200ms;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  `;

  const StyledParagraph = styled.p`
    display: inline-block;
    font-size: 3.375rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    color: #fff;
    position: relative;
    font-weight: 400;
    animation-name: ${translate};
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 100ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  `;

  return (
    <>
      <FirstLetter>B</FirstLetter>
      <StyledParagraph style={{ '--animation-order': 3 }}>l</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 4 }}>a</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 5 }}>n</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 6 }}>c</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 7 }}>h</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 8 }}>a</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 9 }}>r</StyledParagraph>
      <StyledParagraph style={{ '--animation-order': 10 }}>d</StyledParagraph>
    </>
  );
};

export default Logo;
