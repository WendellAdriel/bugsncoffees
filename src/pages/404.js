import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled('div')`
  text-align: center;
`

const NotFoundText = styled('h1')`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 3rem;
`

const NotFoundImage = styled('img')`
  width: 50%;
  height: auto;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <NotFoundText>Page not found :/</NotFoundText>
      <NotFoundImage
        src="https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif"
        alt="Page not found"
      />
    </Wrapper>
  </Layout>
)

export default NotFoundPage
