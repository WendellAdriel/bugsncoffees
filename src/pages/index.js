import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { theme, breakpoints } from '../helpers/styles'

const keywords = [
  'blog',
  'software',
  'development',
  'bug',
  'coffee',
  'wendell',
  'adriel',
  'code',
  'js',
  'javascript',
  'engineer',
  'front-end',
  'back-end',
  'articles',
  'tutorials',
  'learn',
  'react',
  'vue',
  'node',
]

const Introduction = styled.section`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  ${breakpoints.md} {
    font-size: 3rem;
  }

  a {
    border-bottom: 1px dashed ${theme.colors.primary};
  }
`

const Highlight = styled.span`
  font-weight: 700;
`

const ComingSoon = styled.section`
  width: 100%;
  text-align: center;  
  font-family: ${theme.fonts.cursive};
  font-size: 4rem;
  border-top: 1px solid ${theme.colors.primary};
  padding-top: 1.5rem;

  ${breakpoints.md} {
    font-size: 5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={keywords}
      description={`Bugs n' Coffees is my personal blog that I'll write about software development (mostly related to JS) where the articles will mix storytelling with references to music lyrics while exploring topics and tutorials about software development.`}
    />
    <Introduction>
      <Highlight>Hey there, I'm <a href="https://wendelladriel.com" target="_blank" rel="noopener noreferrer">Wendell Adriel</a> 👋</Highlight><br />
      I'm a Software Engineer and I've been working with software development since 2009. Besides that, I'm a <Highlight>BIG FAN</Highlight> of tabletop RPG games.
      I play D&D since 2008 as a Dungeon Master and I really love fantasy worlds, that's one of the reasons I love to be a Dungeon Master because
      I can create these worlds.
    </Introduction>

    <Introduction>
      <Highlight>Bugs n' Coffees (B&C)</Highlight> is my new personal project, where I'll merge things I love: Software Development, Fantasy Worlds, Storytelling and Music.
      You must be thinking, how do you plan to do that? 🤔🤔🤔
    </Introduction>

    <Introduction>
      This will be a different blog, where <Highlight>the articles will be written as a history</Highlight> and the main character will need to solve bugs, challenges
      and puzzles with code to advance in the journey. That way, you will not only learn topics about Software Development, but also will follow an interesting journey
      of <Highlight>Eva, a 18 years old girl in the beginning of her career into Software Development, into IOLand, a Fantasy World
      ruled by code.</Highlight>
    </Introduction>

    <ComingSoon>Prologue - Coming Soon...</ComingSoon>
  </Layout>
)

export default IndexPage
