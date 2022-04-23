import React from 'react';
import Link from 'next/link';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../layout/Layout';
import { Section, SectionSubText } from '../../styles/GlobalComponents';
/* eslint-disable react/no-danger */

export default function ProjectPage({
  frontmatter: {
    title, date, image, excerpt,
  }, content,
}) {
  return (
    <Layout>
      <Section>
        <Link href="/">
          Go back
        </Link>
        <div>
          <h1>{title}</h1>
          <div>{date}</div>
          <img
            src={`../../../images/projects/${image}`}
            alt=""
            style={{
              maxWidth: '95%', maxHeight: '42vh', paddingTop: '2em', paddingBottom: '1em',
            }}
          />
          <div style={{ maxWidth: '800px' }}>{excerpt}</div>
          <br />
          <SectionSubText dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </Section>
    </Layout>
  );
}

// set up routing for static pages
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('project-posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// props
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('project-posts', `${slug}.md`), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
