import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { CourseWorkData } from '../../constants/coursework';
import { ListTitle } from '../Technologies/TechnologiesStyles';

const Coursework = () => (
  <Section id='coursework'>
    <SectionDivider />
    <SectionTitle>Coursework</SectionTitle>
    <SectionText style={{ fontSize: '18px' }}>
      {CourseWorkData.map((card, i) => (
        <ul>
          {card.courses.map((course, i) => (
            <li key={course.title}>
              - {course.title}, {course.credits} credits
            </li>
          ))}
        </ul>
      ))}
    </SectionText>
  </Section>
);

export default Coursework;
