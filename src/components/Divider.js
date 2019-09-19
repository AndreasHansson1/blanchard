import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Divider = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints, colors },
  } = context;

  const Div = styled.div`
    display: none;
    @media only screen and (min-width: ${breakpoints[2]}) {
      display: block;
      border-bottom: 2px solid ${colors.text};
      width: 60%;
      margin: auto;
    }
  `;

  return <Div />;
};

export default Divider;
