/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { rotate } from '../styles/KeyFrames';

const Logo = () => {
  const StyledDiv = styled.div`
    span {
      font-size: 3.175rem;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      padding: 0;
      margin: 0;
      color: #fff;
      position: relative;
    }
  `;

  const FirstSpan = styled.p`
    display: inline-block;
    font-size: 3.675rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    color: #fff;
    font-weight: 700;
    animation: ${rotate} 500ms ease-in;
    transform: rotate(-7deg);
  `;

  return (
    <StyledDiv>
      <FirstSpan>B</FirstSpan>
      <span>l</span>
      <span>a</span>
      <span>n</span>
      <span>c</span>
      <span>h</span>
      <span>a</span>
      <span>r</span>
      <span>d</span>
    </StyledDiv>
  );
};

export default Logo;
