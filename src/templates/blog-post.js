import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default props => {
  const post = props.data.markdownRemark
  const { title, date } = post.frontmatter

  return (
    <Layout>
      <article>
        <h2>{title}</h2>
        <h3>
          <span role="img" aria-label="date">
            🗓️
          </span>{' '}
          {date}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
      }
    }
  }
`
