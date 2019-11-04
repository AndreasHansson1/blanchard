import React, { useState } from 'react';
import styled from '@emotion/styled';
import useInterval from '../hooks/useInterval';
import { translate } from '../styles/KeyFrames';

const WordChange = () => {
  const StyledP = styled.p`
    font-style: italic;
    display: inline-block;
    color: #fff;
    padding: 0;
    margin: 0;
    position: relative;
    animation-name: ${translate};
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 100ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  `;

  const wordsArr = [
    ['v', 'ä', 'l', 'k', 'o', 'm', 'm', 'e', 'n', '!'],
    ['w', 'e', 'l', 'c', 'o', 'm', 'e', '!'],
    ['b', 'e', 'n', 'v', 'e', 'n', 'u', 't', 'o', '!']
  ];
  const words = wordsArr.map(newArr =>
    newArr.map((p, key) => (
      <StyledP id={key} style={{ '--animation-order': key + 1 }}>
        {p}
      </StyledP>
    ))
  );

  // eslint-disable-next-line prefer-const
  let [counter, setCounter] = useState(0);

  useInterval(() => {
    counter += 1;
    if (counter >= words.length) {
      counter = 0;
    }
    setCounter(counter);
  }, 2000);

  return <>{words[counter]}</>;
};

export default WordChange;
