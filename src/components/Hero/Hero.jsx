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
          Hi, I&apos;m Liz Dahlström
          <br />
        </SectionTitle>
        <SectionText>
          I&apos;m a Computer Science student focused on web development based in Gothenburg.
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
