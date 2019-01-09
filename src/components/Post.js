import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import ReadingTime from './ReadingTime'
import { theme, breakpoints } from '../helpers/styles'

const Wrapper = styled.article`
  flex: 0 0 auto;
  flex-flow: column wrap;
  padding: 1.5rem;
  border-top: 1px solid ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};

  &:hover {
    background: #fffdd0;
  }

  h4 {
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.cursive};
    font-size: 2rem;

    ${breakpoints.md} {
      font-size: 3.5rem;
    }
  }

  span {
    font-family: ${theme.fonts.cursive};
    font-size: 1.5rem;
    font-weight: 700;

    ${breakpoints.md} {
      font-size: 2rem;
    }

    span[role='img'] {
      margin-right: 5px;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;

    ${breakpoints.md} {
      font-size: 1.6rem;
    }
  }
`

export default ({ post, index }) => (
  <>
    <Link to={post.fields.slug} key={index}>
      <Wrapper>
        <h4>
          {post.frontmatter.title}
          <ReadingTime readingTime={post.fields.readingTime} />
        </h4>
        <span>
          <span role="img" aria-label="date">
            🗓️
          </span>
          {post.frontmatter.date}
          <small>
            {' '}
            - In this chapter you will learn about{' '}
            {post.frontmatter.tags.join(', ')}
          </small>
        </span>
        <p>{post.excerpt}</p>
      </Wrapper>
    </Link>
  </>
)
