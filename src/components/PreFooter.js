import React from 'react';
import { useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

const Footer = () => {
  const context = useThemeUI();
  const {
    theme: { colors, breakpoints }
  } = context;

  const StyledDiv = styled.div`
    background-color: ${colors.lightGrey};
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Div = styled.div`
    margin: 0 auto 1rem auto;
    padding: 0 1rem;
    max-width: 960px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.5rem;
    @media only screen and (min-width: ${breakpoints[2]}) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      grid-row-gap: 0.5rem;
    }
  `;

  return (
    <StyledDiv>
      <h2>Links</h2>
      <Div>
        <div>
          <a title='La Grange' href='https://ristorantelagrange.beepworld.it/'>
            La Grange
          </a>
          <small> (Best food in Champoluc?)</small>
        </div>
        <div>
          <a
            title='Fior Di Roccia'
            href='https://www.tripadvisor.se/Restaurant_Review-g1028607-d2331201-Reviews-Fior_di_Roccia-Ayas_Valle_d_Aosta.html'
          >
            Fior Di Roccia
          </a>
          <small> (Excellent lasagna)</small>
        </div>
        <div>
          <a title='Visit Monterosa' href='https://www.visitmonterosa.com/'>
            Visit Monterosa
          </a>
          <small> (Info about Monte Rosa)</small>
        </div>
        <div>
          <a title='Valle D Aosta' href='http://www.lovevda.it/en/'>
            Valle D Aosta
          </a>
          <small> (More things to do in Aosta)</small>
        </div>
        <div>
          <a title='Monte Rosa Spa' href='https://monterosaspa.it/'>
            Monte Rosa Spa
          </a>
          <small> (Lovley Spa)</small>
        </div>
        <div>
          <a title='WeLove2Ski' href='http://welove2ski.com/champoluc'>
            WeLove2Ski
          </a>
          <small> (Information of the skiing)</small>
        </div>
        <div>
          <a
            title='Weather YR'
            href='https://www.yr.no/place/Italy/Aosta_Valley/Champoluc/'
          >
            Weather YR
          </a>
          <small> (The current weather)</small>
        </div>
      </Div>
    </StyledDiv>
  );
};

export default Footer;
