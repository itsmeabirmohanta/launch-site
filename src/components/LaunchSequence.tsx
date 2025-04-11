import React from 'react';
import { 
  LaunchSequence as StyledLaunchSequence,
  ReadyTextContainer,
  ReadyText,
  LanguageIndicator,
  ProgressBarContainer,
  ProgressBar,
  Progress,
  ProgressText
} from '../styles/StyledComponents';

interface LaunchSequenceProps {
  currentLangIndex: number;
  progress: number;
  translation: { text: string; lang: string };
}

export const LaunchSequence: React.FC<LaunchSequenceProps> = ({ 
  currentLangIndex,
  progress,
  translation
}) => {
  return (
    <StyledLaunchSequence>
      <ReadyTextContainer key={currentLangIndex}>
        <ReadyText>{translation.text}</ReadyText>
        <LanguageIndicator>{translation.lang}</LanguageIndicator>
      </ReadyTextContainer>
      <ProgressBarContainer>
        <ProgressBar>
          <Progress width={progress} />
        </ProgressBar>
        <ProgressText>{Math.round(progress)}%</ProgressText>
      </ProgressBarContainer>
    </StyledLaunchSequence>
  );
}; 