import React from 'react';
import styled from '@emotion/styled';

const Text = styled.div`
  padding: 0.5rem 2.5rem;
  line-height: 1.7;
  width: auto;
  height: 100%;
`;

const TextOne = () => (
  <Text>
    <h2>Large common area</h2>
    <p>
      Welcome to this lovely apartment for rent just outside Champoluc village.
      The apartment has 3 bedrooms, 1 bathroom with bathtub/ shower and washing
      machine, a fully equipped kitchen combined with a large common area that
      is excellent for socializing. The dining table is currently set to seat
      6-8 people but can easily be done larger if needed. The common area has a
      large sofa, chairs and sofa table.
    </p>
  </Text>
);

export default TextOne;
