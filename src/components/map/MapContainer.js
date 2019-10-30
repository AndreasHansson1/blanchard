import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';
import MapText from './MapText';
import Map from './Map';

const MapContainer = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints }
  } = context;

  const MapWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    position: relative;
    @media only screen and (min-width: ${breakpoints[2]}) {
      grid-template-columns: 1fr 1fr;
      min-height: 50vh;
    }
  `;

  return (
    <MapWrapper>
      <MapText />
      <Map />
    </MapWrapper>
  );
};

export default MapContainer;
