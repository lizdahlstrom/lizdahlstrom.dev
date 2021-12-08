import React from 'react';
import { DiFirebase, DiReact, DiUbuntu, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      A selection of web/software development and operations technologies I have
      used and feel comfortable with.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React.js, HTML5, CSS3</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Spring, SQL, PostgreSQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUbuntu size='3rem' />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>JavaScript, TypeScript, Java, C#</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
