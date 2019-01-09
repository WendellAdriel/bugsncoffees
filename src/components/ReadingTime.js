import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { breakpoints } from '../helpers/styles'

const Wrapper = styled.small`
  font-size: 1rem;
  margin-left: 10px;

  ${breakpoints.md} {
    font-size: 2rem;
  }

  strong {
    margin-left: 5px;
  }
`

const ReadingTime = ({ readingTime }) => {
  const coffeeTemplate = (
    <span role="img" aria-label="coffee">
      ☕
    </span>
  )
  const coffeeCount = Math.ceil(readingTime.minutes / 5)
  let finalTemplate = []
  for (let count = 1; count <= coffeeCount; count++) {
    finalTemplate.push(coffeeTemplate)
  }

  return (
    <Wrapper>
      {finalTemplate}
      <strong>{readingTime.text}</strong>
    </Wrapper>
  )
}

ReadingTime.propTypes = {
  readingTime: PropTypes.object.isRequired,
}

export default ReadingTime
