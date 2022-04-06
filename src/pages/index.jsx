import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

function Home({ projects }) {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <ProjectsList projects={projects} />
      <Technologies />
      <About />
      <Acomplishments />
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  // files from projects dir
  const files = fs.readdirSync(path.join('project-posts'));

  const projectPosts = files.map((post) => {
    const slug = post.replace('.md', '');

    // frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('project-posts', post), 'utf-8');

    // rename data to frontmatter, use gray-matter pkg
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects: projectPosts.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
      ),
    },
  };
}
