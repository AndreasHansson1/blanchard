import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';
import Form from './Form';

const Booking = () => {
  const context = useThemeUI();
  const {
    theme: { breakpoints, textPadding }
  } = context;

  const Div = styled.div`
    padding: ${textPadding};
    line-height: 1.7;
    max-width: 35rem;
    margin: auto;
    h2 {
      padding-top: 0;
    }
  `;
  const FormWrapper = styled.div`
    padding: 0;
    line-height: 1.7;
    max-width: 100%;
    margin: 0;
    @media only screen and (min-width: ${breakpoints[0]}) {
      max-width: 35rem;
      padding: ${textPadding};
      margin: auto;
    }
  `;

  return (
    <>
      <Div>
        <h2>Booking</h2>
        <p>
          To make an inquiry, please fill out the form below with your preferred
          travel dates. We will do our best to respond within 1 day. Rates
          approx 100€/ night. During peak season (week 51, 52, 1, 2, 7, 8, 9,
          32, 33, 34) the rates are higher. Cleaning is included. Minimum rental
          length is 4 nights. Or you can send an inquiry to{' '}
          <a title='Email' href='mailto:info.blanchard@mail.com'>
            info.blanchard[at]mail.com
          </a>{' '}
        </p>
      </Div>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </>
  );
};

export default Booking;
