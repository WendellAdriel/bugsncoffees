import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Header from './header'
import Footer from './footer'
import { theme, breakpoints } from '../helpers/styles'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  width: 90%;
  margin-left: 5%;
  padding: 1rem 0;
  color: #222;
  
  ${breakpoints.md} {
    padding: 2rem 0;
  }
`

const Layout = ({ children }) => (
  <>
    <Global styles={css`
      html {
        height: 100%;
        font-size: 10px;
        font-family: ${theme.fonts.primary};
      }
      body {
        min-height: 100%;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
    />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
