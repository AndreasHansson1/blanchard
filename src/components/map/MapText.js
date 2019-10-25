import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const MapText = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const Text = styled.div`
    padding: 0.5rem 2.5rem;
    line-height: 1.7;
    order: 1;
    @media only screen and (min-width: ${breakpoints[1]}) {
      order: -1;
    }
  `;

  return (
    <Text>
      <h2>Get there</h2>
      <p>
        If you are flying in, Torino is the closest airport around 1,5 hour
        drive. Milano’s airports (Linate, Malpensa) and Bergamo is a 2 - 2,5
        hour drive. The house is approx 3 km from <strong>Champoluc</strong>{' '}
        village and 1 km from the Frachey lift station, that takes you to the{' '}
        <a
          title='Visit Moterosa'
          href='https://www.visitmonterosa.com/en/monterosa-ski/'
        >
          Monterosa Ski System.
        </a>{' '}
        It is a huge system that connects Alagna, Gressoney and Champoluc. You
        can get world class skiing of both piste and freeride just around the
        corner.
      </p>
    </Text>
  );
};

export default MapText;
