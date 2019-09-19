import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardImage = ({ image }) => {
  const Image = styled.div`
    height: 100%;
  `;

  return <Image>{image}</Image>;
};

CardImage.propTypes = {
  image: PropTypes.node.isRequired,
};

export default CardImage;
