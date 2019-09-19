import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';
import CardImage from './CardImage';

const Card = ({ children, image }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints },
  } = context;

  const CardWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: ${breakpoints[2]}) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  return (
    <CardWrapper>
      <CardImage image={image} />
      {children}
    </CardWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

export default Card;
