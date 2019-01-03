import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { theme, breakpoints } from '../helpers/styles'

const keywords = [
  'blog', 'software', 'development', 'bug', 'coffee', 'wendell', 'adriel',
  'code', 'js', 'javascript', 'engineer', 'front-end', 'back-end', 'articles',
  'tutorials', 'learn', 'react', 'vue', 'node'
]

const ComingSoon = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${theme.fonts.cursive};
  font-size: 5rem;
  font-weight: 700;

  ${breakpoints.md} {
    font-size: 7rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={keywords}
      description={`Bugs n' Coffees is my personal blog that I'll write about software development (mostly related to JS) where the articles will mix storytelling with references to music lyrics while exploring topics and tutorials about software development.`}
    />
    <ComingSoon>Coming soon...</ComingSoon>
  </Layout>
)

export default IndexPage
