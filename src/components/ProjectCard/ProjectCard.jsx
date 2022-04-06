import React from 'react';

import { DiGithubBadge } from 'react-icons/di';
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

const _truncate = (s, maxLength) => (s.length > maxLength
  ? `${s.substr(0, s.indexOf(' ', maxLength - 1))}...`
  : s);

function ProjectCard({
  title, image, excerpt, tags, visit, source, slug,
}) {
  return (
    <BlogCard key={title}>
      <Img src={`./images/projects/${image}`} />
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{_truncate(excerpt, 210)}</CardInfo>
      <Link href={`/project/${slug}`}>
        <a href="/">Read more</a>
      </Link>
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
