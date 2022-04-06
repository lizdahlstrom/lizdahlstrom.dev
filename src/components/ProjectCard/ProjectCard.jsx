import React, { useEffect } from 'react';

import matter from 'gray-matter';

import { DiGithubBadge } from 'react-icons/di';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectCardStyles';

import TagChip from '../TagChip/TagChip';

const _truncate = (s, maxLength) => (s.length > maxLength
  ? `${s.substr(0, s.indexOf(' ', maxLength - 1))}...`
  : s);

function ProjectCard({
  title, image, excerpt, tags, visit, source,
}) {
  return (
    <BlogCard key={title}>
      <Img src={`./images/projects/${image}`} />
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{_truncate(excerpt, 250)}</CardInfo>
      <div>
        {tags
          ? (
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag}>
                  <TagChip name={Object.keys(tag)} icon={tag} />
                </Tag>
              ))}
            </TagList>
          )
          : ''}
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
  );
}

export default ProjectCard;
