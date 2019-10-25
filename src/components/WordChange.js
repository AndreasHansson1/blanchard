import React, { useState } from 'react';
import styled from '@emotion/styled';
import useInterval from '../hooks/useInterval';

const WordChange = () => {
  const Span = styled.span`
    font-size: 1.5rem;
    font-style: italic;
    display: inline-block;
    color: #fff;
    min-width: 10rem;
  `;

  const words = ['välkommen!', 'welcome!', 'benvenuto!'];
  // eslint-disable-next-line prefer-const
  let [counter, setCounter] = useState(0);

  useInterval(() => {
    counter += 1;
    if (counter >= words.length) {
      counter = 0;
    }
    setCounter(counter);
  }, 1500);

  return <Span>{words[counter]}</Span>;
};

export default WordChange;
