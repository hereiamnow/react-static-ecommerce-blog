/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/20/2019 12:51 AM
 * Relative Path: src/components/GraphQL/ComponentName.js
 * Description:
 */

import React from 'react';
import { graphql } from 'gatsby';

const ComponentName = ({data}) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            date(fromNow: false)
            slug
          }
          excerpt(pruneLength: 75)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(fromNow: false)
            category
          }
          wordCount {
            paragraphs
            words
            sentences
          }
        }
      }
    }
  }
`;

export default ComponentName;
