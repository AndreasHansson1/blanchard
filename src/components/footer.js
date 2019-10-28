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

    h2 {
      padding: 0;
      margin: 0;
      color: #fff;
      font-weight: 400;
    }

    a {
      color: #fff;
      text-decoration: none;
      background-color: transparent;

      letter-spacing: 1px;
    }

    span {
      color: white;
      display: block;
    }
    @media only screen and (min-width: ${breakpoints[1]}) {
      display: block;
    }
  `;

  return (
    <StyledFooter>
      <Div>
        <h2>
          <Link title='Home' to='/#'>
            <strong>B</strong>lanchard
          </Link>
        </h2>
        <span>Copyright &copy; 2019, A. Hansson</span>
        <a title='Email' href='mailto:info.blanchard@mail.com'>
          info.blanchard[at]mail.com
        </a>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
