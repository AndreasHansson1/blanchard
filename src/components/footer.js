import React from 'react';
import { useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

const Footer = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints, colors },
  } = context;

  const StyledFooter = styled.footer`
    background-color: ${colors.text};
  `;

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem 1rem;
    @media only screen and (min-width: ${breakpoints[1]}) {
      display: block;
    }
  `;

  const H2 = styled.h2`
    padding: 0;
    margin: 0;
    color: #fff;
  `;

  return (
    <StyledFooter>
      <Div>
        <H2>Blanchard</H2>
        <span style={{ color: 'white', display: 'block' }}>
          Copyright &copy; 2019, A. Hansson
        </span>
        <a href="mailto:info.blanchard@mail.com">info.blanchard@mail.com</a>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
