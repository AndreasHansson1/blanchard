import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';
import Header from './header';
import PreFooter from './PreFooter';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const Main = styled.div`
    display: grid;
    max-width: 960px;
    grid-template-columns: minmax(auto, 960px);
    margin: 0.5rem auto;
    grid-template-rows: repeat(6, auto);
    grid-row-gap: 0.5rem;
    padding: 0 0.5rem;
    align-items: center;
    @media only screen and (min-width: ${breakpoints[1]}) {
      margin: 1.5rem auto;
      grid-row-gap: 1.5rem;
    }
    @media only screen and (min-width: ${breakpoints[2]}) {
      margin: 2.5rem auto;
      grid-row-gap: 2.5rem;
      padding: 0;
    }
  `;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <PreFooter />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
