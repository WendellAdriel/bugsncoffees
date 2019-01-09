import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/Post'
import { theme, breakpoints } from '../helpers/styles'

const Introduction = styled.section`
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  ${breakpoints.md} {
    font-size: 2.5rem;
  }
`

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 700;

  a {
    border-bottom: 1px dashed ${theme.colors.secondary};
  }
`

const PostList = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  padding-top: 1.5rem;
`

const MainTitle = styled.h3`
  flex: 0 0 auto;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.cursive};
  font-size: 3rem;
  align-self: center;

  ${breakpoints.md} {
    font-size: 4.5rem;
  }
`

const IndexPage = ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <SEO
      title="Home"
      description={`Bugs n' Coffees is my personal blog that I'll write about software development (mostly related to JS) where the articles will mix storytelling with references to music lyrics while exploring topics and tutorials about software development.`}
    />
    <Introduction>
      <Highlight>
        Hey there, I'm{' '}
        <a
          href="https://wendelladriel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wendell Adriel
        </a>{' '}
        👋
      </Highlight>
      <br />
      I'm a Software Engineer and I've been working with software development
      since 2009. Besides that, I'm a <Highlight>BIG FAN</Highlight> of tabletop
      RPG games. I play D&D since 2008 as a Dungeon Master and I really love
      fantasy worlds, that's one of the reasons I love to be a Dungeon Master
      because I can create these worlds.
    </Introduction>

    <Introduction>
      <Highlight>Bugs n' Coffees (B&C)</Highlight> is my new personal project,
      where I'll merge things I love: Software Development, Fantasy Worlds,
      Storytelling and Music. You must be thinking, how do you plan to do that?
      🤔🤔🤔
    </Introduction>

    <Introduction>
      This will be a different blog, where{' '}
      <Highlight>the articles will be written as a history</Highlight> and the
      main character will need to solve bugs, challenges and puzzles with code
      to advance in the journey. That way, you will not only learn topics about
      Software Development, but also will follow an interesting journey of{' '}
      <Highlight>
        Eva, a 18 years old girl in the beginning of her career into Software
        Development, into IOLand, a Fantasy World ruled by code.
      </Highlight>
    </Introduction>

    <PostList>
      <MainTitle>The History</MainTitle>
      {allMarkdownRemark.edges.map(({ node }, i) => (
        <Post post={node} index={i} />
      ))}
    </PostList>
  </Layout>
)

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
            tags
          }
          fields {
            slug
            readingTime {
              text
              minutes
            }
          }
        }
      }
    }
  }
`
