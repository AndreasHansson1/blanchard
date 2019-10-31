import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './src/gatsby-plugin-theme-ui';
import { object } from 'prop-types';
import './src/components/layout.css';

// Polyfill for lazy loading etc in Safari and IE
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider value={{ theme }}>{element}</ThemeProvider>;
};
wrapPageElement.propTypes = {
  element: object.isRequired
};
