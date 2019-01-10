import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { theme, breakpoints } from '../helpers/styles'

const Wrapper = styled.section`
  width: 100%;
  text-align: center;
  border-top: 1px solid ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};
  padding: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-family: ${theme.fonts.cursive};
    font-size: 2.5rem;
    margin-bottom: 0.8rem;

    ${breakpoints.md} {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 2rem;

    ${breakpoints.md} {
      font-size: 3rem;
    }
  }
`

const TwitterShare = styled.a`
  margin-right: 3rem;

  &:hover {
    color: #1da1f2;
  }
`

const FacebookShare = styled.a`
  &:hover {
    color: #4267b2;
  }
`

const Share = ({ url, pathname, title, authorTwitter }) => {
  const twitter = `https://twitter.com/intent/tweet?url=${url +
    pathname}&text=${title} by ${authorTwitter}`
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${url + pathname}`

  return (
    <Wrapper>
      <h1>Share</h1>
      <p>
        <TwitterShare href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterShare>

        <FacebookShare href={fb} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </FacebookShare>
      </p>
    </Wrapper>
  )
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorTwitter: PropTypes.string.isRequired,
}

export default Share
