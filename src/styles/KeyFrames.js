import { keyframes } from '@emotion/core';

export const scale = keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(-7deg)
  }
`;

export const translate = keyframes`
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-10px)
  }
  100% {
    transform: translateY(0)
  }
`;
