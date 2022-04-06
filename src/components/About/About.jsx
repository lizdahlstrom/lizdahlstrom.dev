import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

function About() {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        My name is Liz. I code stuff, mostly in
        {' '}
        <strong>JavaScript</strong>
        .
      </SectionText>
      <br />
      <SectionText>
        As a person I am quite tenacious, which is something that goes well
        with my love for problem-solving. I adore the creative process of
        building things. Not only software and applications- In my free time I
        like to play the guitar and keyboard, and experiment with music
        making. I am always working on some project trying to learn new
        things.
      </SectionText>
    </Section>
  );
}

export default About;
