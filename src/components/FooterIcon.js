import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = styled.a`
  background-image: none;
  text-decoration: none;
  color: #ddd;
  font-size: 3.5rem;
  margin-right: 1rem;
  &:hover {
    color: #fff;
  }
`

const FooterIcon = props => (
  <IconLink href={props.url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={props.icon} />
  </IconLink>
)

FooterIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default FooterIcon