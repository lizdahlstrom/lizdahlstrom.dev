import React from 'react';
import Link from 'next/link';
import marked from 'marked';
/* eslint-disable react/no-danger */

function ProjectPage({ title, date, image }, slug, content) {
  return (
    <>
      <Link href="/">
        <a href="/">Go back</a>
      </Link>
      <div>
        <h1>{title}</h1>
        <div>{date}</div>
        <img src={image} alt="" />
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
