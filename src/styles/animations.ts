import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const shimmerAnimation = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const flipInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: perspective(400px) rotateX(-90deg);
  }
  40% {
    transform: perspective(400px) rotateX(20deg);
  }
  60% {
    transform: perspective(400px) rotateX(-10deg);
  }
  80% {
    transform: perspective(400px) rotateX(5deg);
  }
  100% {
    opacity: 1;
    transform: perspective(400px) rotateX(0deg);
  }
`; 