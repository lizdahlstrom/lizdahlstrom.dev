import React from 'react';

import { DiGithubBadge, DiChrome } from 'react-icons/di';
import Link from 'next/link';
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

const _truncate = (s, maxLength) => {
  if (s.length <= maxLength) return s;

  let str = s.substr(0, maxLength - 1);

  const lastIndex = str.lastIndexOf('.');
  // truncate where string contains a period if existant
  if (lastIndex >= 0) str = str.substr(0, lastIndex);

  return `${str}...`;
};

function ProjectCard({
  title, image, excerpt, tags, visit, source, slug,
}) {
  return (
    <BlogCard key={title}>
      <Img src={`./images/projects/${image}`} />
      <TitleContent>
        <HeaderThree title="true">{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{_truncate(excerpt, 230)}</CardInfo>
      <div>
        <Link href={`/project/${slug}`}>
          <a href="/">Read more</a>
        </Link>
      </div>
      <div>
        {tags.length > 0
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
          <ul>
            <li style={{ float: 'left', marginRight: '0.3em', marginLeft: '-0.3em' }}>
              <DiGithubBadge size="2rem" style={{ display: 'block' }} />
            </li>
            <li style={{ float: 'left' }}>Code</li>
          </ul>
        </ExternalLinks>
        {visit ? (
          <ExternalLinks href={visit}>
            {' '}
            <ul>
              <li style={{ float: 'left', marginRight: '0.3em', marginLeft: '-0.3em' }}>
                <DiChrome size="2rem" style={{ display: 'block' }} />
              </li>
              <li style={{ float: 'left' }}>Live</li>
            </ul>
          </ExternalLinks>
        ) : (
          ''
        )}
      </UtilityList>
    </BlogCard>
  );
}

export default ProjectCard;
