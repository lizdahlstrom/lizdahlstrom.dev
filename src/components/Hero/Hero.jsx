import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import LeftSection from './HeroStyles';

function Hero() {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Liz Dahlström
          <br />
        </SectionTitle>
        <SectionText>
          Studying computer science with a focus on web development. Based in
          the Gothenburg area.
        </SectionText>
        <Button
          onClick={() => {
            window.location = '#about';
          }}
        >
          About me
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
