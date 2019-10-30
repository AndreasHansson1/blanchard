import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardImage = ({ image }) => {
  const Image = styled.div`
    height: 100%;

    .gatsby-image-wrapper {
      height: 100%;
    }

    img {
      filter: sepia(0.2);
    }
  `;

  return <Image>{image}</Image>;
};

CardImage.propTypes = {
  image: PropTypes.node.isRequired
};

export default CardImage;
