import React from 'react';
import { LaunchButtonContainer, LaunchButton as StyledButton, ButtonText, ButtonGlow } from '../styles/StyledComponents';

interface LaunchButtonProps {
  onClick: () => void;
}

export const LaunchButton: React.FC<LaunchButtonProps> = ({ onClick }) => {
  return (
    <LaunchButtonContainer>
      <StyledButton onClick={onClick}>
        <ButtonText>LAUNCH PLATFORM</ButtonText>
        <ButtonGlow />
      </StyledButton>
    </LaunchButtonContainer>
  );
}; 