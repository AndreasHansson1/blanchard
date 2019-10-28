import React from 'react';
import { useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

const Footer = () => {
  const context = useThemeUI();
  const {
    theme: { colors }
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
  `;

  return (
    <StyledDiv>
      <h3>Links</h3>
      <Div>
        <div>
          <a title='La Grange' href='https://ristorantelagrange.beepworld.it/'>
            La Grange
          </a>
          <small> (Best food in Champoluc)</small>
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
      </Div>
    </StyledDiv>
  );
};

export default Footer;
