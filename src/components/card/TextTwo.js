import React from 'react';
import styled from '@emotion/styled';

const Text = styled.div`
  padding: 0.5rem 2.5rem;
  line-height: 1.7;
  width: auto;
  height: 100%;
`;

const TextTwo = () => (
  <Text>
    <h2>Just outside Champoluc</h2>
    <p>
      The apartment has a large wooden patio with a beautiful view of the
      valley. The apartment is situated approx 1 km from the Frachey lift
      station and approx 3km from <strong>Champoluc</strong> village. Within
      walking distance you will find the ski bus, lots of hiking trails and the
      famous{' '}
      <a
        title='Fior Di Roccia'
        href='https://www.tripadvisor.se/Restaurant_Review-g1028607-d2331201-Reviews-Fior_di_Roccia-Ayas_Valle_d_Aosta.html'
      >
        Fior Di Roccia
      </a>
      , creperia. Parking is included for 1 car. Bedroom nr 1 has a double bed,
      plenty of hooks on the wall. Bedroom nr 2 has a double bed, plenty of
      hooks on the wall as well as plenty of drawers to unpack in. Bedroom nr 3
      has two single beds + a madras, plenty of hooks on the wall and drawers to
      unpack in. The bathroom has a combined shower and bathtub as well as a
      washing machine. The entrance outside the apartment has plenty of space to
      hang up your (ski) clothes, helmets and store your boots.
    </p>
  </Text>
);

export default TextTwo;
