import React from 'react';
import { 
  MainContent as StyledMainContent,
  TopSection,
  CenterSection,
  LogoContainer,
  Presents,
  MainTitle,
  Subtitle
} from '../styles/StyledComponents';
import { LaunchButton } from './LaunchButton';

interface MainContentProps {
  onLaunch: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ onLaunch }) => {
  return (
    <StyledMainContent>
      <TopSection>
        <LogoContainer>
          <img src="/fsl-white.png" alt="Future Shift Labs" height="100" />
        </LogoContainer>
        <Presents>PRESENTS</Presents>
      </TopSection>
      <CenterSection>
        <MainTitle>GLOBAL ELECTIONS & AI TRACKER</MainTitle>
        <Subtitle>Launch of Policy paper, tracker & Roundtable on safeguarding Electoral integrity</Subtitle>
        <LaunchButton onClick={onLaunch} />
      </CenterSection>
    </StyledMainContent>
  );
}; 