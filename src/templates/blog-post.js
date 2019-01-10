import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ReadingTime from '../components/ReadingTime'
import Share from '../components/Share'
import { theme, breakpoints } from '../helpers/styles'

const ArticleHeader = styled.header`
  width: 100%;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.cursive};
  font-weight: 700;
  text-align: center;
  border-top: 1px solid ${theme.colors.primary};
  padding-top: 2rem;

  h1 {
    font-size: 3rem;

    ${breakpoints.md} {
      font-size: 4.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;

    ${breakpoints.md} {
      font-size: 2.5rem;
    }
  }
`

const ArticleBody = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.cursive};
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    ${breakpoints.md} {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    text-align: justify;
    margin-bottom: 1.5rem;

    ${breakpoints.md} {
      font-size: 1.8rem;
    }
  }

  pre {
    font-size: 1.3rem;

    ${breakpoints.md} {
      font-size: 1.8rem;
    }
  }
`

export default props => {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const authorTwitter = props.data.site.siteMetadata.author.twitterUser
  const { id, title, date, tags } = post.frontmatter
  const { readingTime } = post.fields

  const disqusShortname = 'bugsncoffees'
  const disqusConfig = { identifier: id, title: title }

  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt}
        pathname={props.location.pathname}
      />
      <article>
        <ArticleHeader>
          <h1>{title}</h1>
          <h2>
            <span role="img" aria-label="date">
              🗓️
            </span>{' '}
            {date}
            <br />
            <ReadingTime readingTime={readingTime} />
            <small>
              {' '}
              - In this chapter you will learn about {tags.join(', ')}
            </small>
          </h2>
        </ArticleHeader>

        <ArticleBody dangerouslySetInnerHTML={{ __html: post.html }} />
        <Share
          url={url}
          pathname={props.location.pathname}
          title={title}
          authorTwitter={authorTwitter}
        />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        id
        date(formatString: "MMM D, YYYY")
        title
        tags
      }
      fields {
        readingTime {
          text
          minutes
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        author {
          twitterUser
        }
      }
    }
  }
`
