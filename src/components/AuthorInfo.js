import React from 'react'

import { Introduction, Highlight } from '../helpers/base-visual-components'

export default () => (
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
)
