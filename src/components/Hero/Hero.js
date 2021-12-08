import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Liz <br />
      </SectionTitle>
      <SectionText>
        Computer science student at Linnaeus University, Sweden.
      </SectionText>
      <Button
        onClick={() => {
          window.location = '#about';
        }}>
        About me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
