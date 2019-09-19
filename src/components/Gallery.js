/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';
import GalleryItem from './GalleryItem';

const Gallery = ({ images }) => {
  const context = useThemeUI();
  const {
    theme: { breakpoints },
  } = context;

  const GalleryContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: max-content;
    grid-gap: 0.5rem;
    @media only screen and (min-width: ${breakpoints[2]}) {
      grid-gap: 1rem;
    }
  `;

  return (
    <GalleryContainer>
      <GalleryItem images={images} />
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
