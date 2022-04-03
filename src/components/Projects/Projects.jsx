import React from 'react';

import { DiGithubBadge } from 'react-icons/di';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import TagChip from '../TagChip/TagChip';
import projects from '../../constants/projects';

const _truncate = (s, maxLength) => (s.length > maxLength
  ? `${s.substr(0, s.indexOf(' ', maxLength - 1))}...`
  : s);

function Projects() {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({
            id, title, description, image, tags, source, visit,
          }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{_truncate(description[0], 250)}</CardInfo>
              <div>
                <TagList>
                  {tags.map((tag) => (
                    <Tag key={tag}>
                      <TagChip name={Object.keys(tag)} icon={tag} />
                    </Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>
                  <ul style={{ listStyleType: 'none' }}>
                    <li style={{ float: 'left', marginRight: '0.3em' }}>
                      <DiGithubBadge size="2rem" />
                    </li>
                    <li style={{ float: 'left' }}>Source</li>
                  </ul>
                </ExternalLinks>
                {visit ? (
                  <ExternalLinks href={visit}>Deployed</ExternalLinks>
                ) : (
                  ''
                )}
              </UtilityList>
            </BlogCard>
          ),
        )}
      </GridContainer>
    </Section>
  );
}

export default Projects;
