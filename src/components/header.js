import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';
import BackgroundImage from 'gatsby-background-image';

const Header = ({ children }) => {
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
    z-index: 10;
    padding: 0;
    display: flex;
    align-items: flex-end;

    strong {
      font-weight: 700;
    }
  `;

  const Wrapper = styled.div`
    margin: 0;
    width: 100%;
    max-width: 960px;
    padding-bottom: 1rem;
    @media only screen and (min-width: ${breakpoints[1]}) {
      margin: 0 auto;
      padding: 0 0 1rem 1rem;
    }
  `;

  const Span = styled.span`
    font-size: 3.375rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    color: #fff;
  `;

  const H1 = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
    margin-bottom: 2px;
    color: #fff;
  `;

  const Div = styled.div`
    color: #fff;
    margin: auto;
    padding: 0;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      background-color: transparent;
      font-weight: 300;
    }

    @media only screen and (min-width: ${breakpoints[1]}) {
      float: left;
      margin: 0;
    }
  `;
  const imageData = [
    'linear-gradient(rgba(25,25,112, 0.3), rgba(25,25,112, 0.1))',
    data.file.childImageSharp.fluid
  ];

  return (
    <BackgroundImage
      fluid={imageData}
      backgroundColor='transparent'
      alt='Mountains'
    >
      <StyledHeader>
        <Wrapper>
          <Div>
            <Span>
              <Link to='/#'>
                <strong>B</strong>lanchard
              </Link>
            </Span>
            <H1>-champoluc apartment for rent-</H1>
            {children}
          </Div>
        </Wrapper>
      </StyledHeader>
    </BackgroundImage>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
