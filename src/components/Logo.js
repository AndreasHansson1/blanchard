/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { scale, rotate, translate } from '../styles/KeyFrames';
import { useThemeUI } from 'theme-ui';

const Logo = ({ sticky }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const Div = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 2rem;
    font-weight: 500;
    z-index: 10;
    @media only screen and (min-width: ${breakpoints[1]}) {
      position: fixed;
      font-weight: ${props => (props.sticky ? '400' : '600')};
      top: ${props => (props.sticky ? '10px' : '1rem')};
      left: 1rem;
      font-size: ${props => (props.sticky ? '2rem' : '3.375rem')};
    }
  `;

  const FirstLetter = styled.p`
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #fff;
    padding: 0;
    margin: 0;

    animation-name: ${translate};
    animation-duration: 350ms;
    animation-delay: 200ms;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  `;

  const StyledParagraph = styled.p`
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #fff;
    padding: 0;
    margin: 0;
    position: relative;

    animation-name: ${translate};
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 100ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  `;

  return (
    <>
      <Div sticky={sticky}>
        <a href='/#' title='home'>
          <FirstLetter>B</FirstLetter>
          <StyledParagraph style={{ '--animation-order': 3 }}>
            l
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 4 }}>
            a
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 5 }}>
            n
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 6 }}>
            c
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 7 }}>
            h
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 8 }}>
            a
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 9 }}>
            r
          </StyledParagraph>
          <StyledParagraph style={{ '--animation-order': 10 }}>
            d
          </StyledParagraph>
        </a>
      </Div>
    </>
  );
};

export default Logo;
