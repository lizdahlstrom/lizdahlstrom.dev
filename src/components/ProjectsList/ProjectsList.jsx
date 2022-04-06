import React from 'react';

import GridContainer from './ProjectsListStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import ProjectCard from '../ProjectCard/ProjectCard';
// import projects from '../../constants/projects';

export default function ProjectsList({ projects }) {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({
          frontmatter: {
            title, date, excerpt, image, tags, source, visit,
          },
        }, slug) => (
          <ProjectCard
            title={title}
            date={date}
            excerpt={excerpt}
            image={image}
            tags={tags}
            source={source}
            visit={visit}
            slug={slug}
          />
        ))}
      </GridContainer>
    </Section>
  );
}
