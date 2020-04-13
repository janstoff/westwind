import React from 'react';
import {graphql} from 'gatsby';
import AppLayout from './App';

import styles from './markdown-page-layout.module.scss';

export default function MarkdownPageLayout({data}) {
  const {markdownRemark} = data;
  const {
    frontmatter: {path, title, date},
    html
  } = markdownRemark;
  const locale = path.startsWith('/en/') ? 'en' : 'de';

  return (
    <AppLayout locale={locale} path={path}>
      <div className={styles.page}>
        <div className="blog-post">
          {title && <h1>{title}</h1>}
          {date && <h2>{date}</h2>}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
