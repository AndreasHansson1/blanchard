/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { translate } from '../styles/KeyFrames';
import { useThemeUI } from 'theme-ui';

const Logo = ({ sticky }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints, colors }
  } = context;

  const Div = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    z-index: 10;
    @media only screen and (min-width: ${breakpoints[1]}) {
      position: fixed;
      font-weight: ${props => (props.sticky ? '500' : '600')};
      top: ${props => (props.sticky ? '10px' : '1rem')};
      left: 1rem;
      font-size: ${props => (props.sticky ? '1.5rem' : '2rem')};
    }
  `;

  const StyledParagraph = styled.p`
    font-family: Staatliches;
    display: inline-block;
    color: #fff;
    text-shadow: -1px -1px 0 ${colors.text}, 1px -1px 0 ${colors.text},
      -1px 1px 0 ${colors.text}, 1px 1px 0 ${colors.text};
    padding: 0;
    margin: 0;
    position: relative;
  `;

  return (
    <>
      <Div sticky={sticky}>
        <a href='/#' title='home'>
          <StyledParagraph sticky={sticky}>Blanchard</StyledParagraph>
        </a>
      </Div>
    </>
  );
};

export default Logo;
