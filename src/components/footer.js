import React from 'react';
import { Link } from 'gatsby';
import { useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

const Footer = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints, colors }
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

    span {
      color: white;
      display: block;
    }
    @media only screen and (min-width: ${breakpoints[1]}) {
      display: block;
    }
  `;

  const StyledLink = styled.a`
    color: rgba(0, 173, 158, 1);
    text-decoration: none;
    background-color: transparent;

    &:hover {
      color: rgba(0, 173, 158, 0.8);
    }
  `;

  const H2 = styled.h2`
    font-weight: 400;
    padding: 0;
    margin: 0;
    a {
      color: #fff;
    }
  `;

  return (
    <StyledFooter>
      <Div>
        <H2>
          <Link title='Home' to='/#'>
            <strong>B</strong>lanchard
          </Link>
        </H2>
        <span>Copyright &copy; 2019, A. Hansson</span>
        <StyledLink title='Email' href='mailto:info.blanchard@mail.com'>
          info.blanchard[at]mail.com
        </StyledLink>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
