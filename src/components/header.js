import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { theme, breakpoints } from '../helpers/styles'
import logo from '../images/bc.png'

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
  padding: 1.5rem;
`

const Logo = styled.img`
  width: 70%;
  margin-bottom: 1.5rem;

  ${breakpoints.md} {
    width: 35%;
  }

  ${breakpoints.lg} {
    width: 25%;
  }
`

const SubTitle = styled.h2`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.cursive};
  font-size: 1.5rem;
  font-weight: 700;

  ${breakpoints.md} {
    font-size: 3rem;
  }
`

const Header = () => (
  <Wrapper>
    <Link
      to="/"
      style={{
        textDecoration: 'none',
      }}
    >
      <Logo src={logo} />
    </Link>
    <SubTitle>
      A tale of a humble engineer trapped in a world full of bugs, challenges
      and puzzles...
    </SubTitle>
  </Wrapper>
)

export default Header
