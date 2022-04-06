import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import CourseWorkData from '../../constants/coursework';
import {
  CourseList, CourseListContainer, CourseListItem,
} from './CourseworkStyles';

function Coursework() {
  return (
    <Section id="coursework">
      <SectionDivider />
      <SectionTitle>Coursework</SectionTitle>
      <CourseListContainer>
        <CourseList>
          {CourseWorkData.map((course) => (
            <CourseListItem key={course.title}>
              {course.title}
            </CourseListItem>
          ))}
        </CourseList>
      </CourseListContainer>
    </Section>
  );
}

export default Coursework;
