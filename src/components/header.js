import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { theme, breakpoints } from '../helpers/styles'

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
  padding: 3rem 1rem;
  background: ${theme.colors.primary};
  color: #fff;
`

const MainTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  ${breakpoints.md} {
    font-size: 3.5rem;
  }

  .separator {
    margin-left: 10px;
    margin-right: 10px;
    font-family: ${theme.fonts.cursive};
    font-size: 3rem;

    ${breakpoints.md} {
      font-size: 5rem;
    }
  }
`

const SubTitle = styled.h2`
  font-family: ${theme.fonts.cursive};
  font-size: 1.5rem;

  ${breakpoints.md} {
    font-size: 3rem;
  }
`

const Header = () => (
  <Wrapper>
    <MainTitle>
      <Link to="/" style={{
        textDecoration: 'none'
      }}
      >
        <span role="img" aria-label="bug">🐛</span>
        <span role="img" aria-label="bug">🐛</span>
        <span role="img" aria-label="bug">🐛</span>
        <span className="separator">&</span>
        <span role="img" aria-label="coffee">☕</span>
        <span role="img" aria-label="coffee">☕</span>
        <span role="img" aria-label="coffee">☕</span>
      </Link>
    </MainTitle>
    <SubTitle>
      A tale of a humble engineer trapped in a world full of bugs, challenges and puzzles...
    </SubTitle>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
