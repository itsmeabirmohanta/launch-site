import styled from 'styled-components';
import { fadeIn, fadeInOut, flipInAnimation, shimmerAnimation } from './animations';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/fsl-guest-card.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 1;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const LogoContainer = styled.div`
  animation: ${fadeIn} 1s ease-out;

  img {
    height: 100px;
    width: auto;

    @media (max-width: 768px) {
      height: 70px;
    }

    @media (max-width: 480px) {
      height: 50px;
    }
  }
`;

export const Presents = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 6px;
  opacity: 0.9;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 4px;
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  letter-spacing: 1px;
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.4s both;
  line-height: 1.2;
  text-shadow: 0 0 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    white-space: normal;
  }
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.6s both;
  letter-spacing: 0.5px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 100%;
    padding: 0;
  }
`;

export const LaunchButtonContainer = styled.div`
  margin-top: 1rem;
  animation: ${fadeIn} 1s ease-out 0.8s both;
`;

export const LaunchButton = styled.button`
  position: relative;
  padding: 1.25rem 3.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: white;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  color: #2442d7;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
`;

export const ButtonGlow = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: ${shimmerAnimation} 2s infinite;
`;

export const LaunchSequence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  animation: ${fadeIn} 0.5s ease-out;
  padding: 2rem;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 2rem;
  }
`;

export const ReadyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: ${fadeIn} 1s ease-out;
  perspective: 1000px;
  width: 100%;
  text-align: center;
`;

export const ReadyText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  opacity: 0;
  transform-origin: center;
  animation: ${flipInAnimation} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  text-shadow: 
    0 0 20px rgba(36, 66, 215, 0.4),
    0 0 40px rgba(36, 66, 215, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const LanguageIndicator = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${fadeInOut} 0.6s ease-out 0.4s forwards;
  transform-origin: center;
`;

export const ProgressBarContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 300px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
`;

export const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,1));
  transition: width 0.3s ease-out;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255,255,255,0.5);
`;

export const ProgressText = styled.div`
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`; 