import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const TextOne = () => {
  const context = useThemeUI();
  const {
    theme: { textPadding }
  } = context;

  const Text = styled.div`
    padding: ${textPadding};
    line-height: 1.7;
    width: auto;
    height: 100%;
  `;
  return (
    <Text>
      <h2>Apartment for rent</h2>
      <p>
        Welcome to this lovely apartment for rent just outside Champoluc village
        in the Italian alps. The apartment has 3 bedrooms, 1 bathroom with
        bathtub/ shower and washing machine, a fully equipped kitchen combined
        with a large common area that is excellent for socializing. The dining
        table is currently set to seat 6-8 people but can easily be done larger
        if needed. The common area has a large sofa, chairs and sofa table.
      </p>
    </Text>
  );
};

export default TextOne;
