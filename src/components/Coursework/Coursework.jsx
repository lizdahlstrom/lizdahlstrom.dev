import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

import CourseWorkData from '../../constants/coursework';

function Coursework() {
  return (
    <Section id="coursework">
      <SectionDivider />
      <SectionTitle>Coursework</SectionTitle>
      <SectionText style={{ fontSize: '18px' }}>
        {CourseWorkData.map((card) => (
          <p>
            <ul>
              {card.courses.map((course) => (
                <li key={course}>
                  -
                  {' '}
                  {course.title}
                </li>
              ))}
            </ul>
          </p>
        ))}
      </SectionText>
    </Section>
  );
}

export default Coursework;
