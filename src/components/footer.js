import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'

import FooterIcon from './FooterIcon'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #401b14;
  color: #ddd;
  padding: 0.6rem;
`

const FooterMessage = styled.div`
  font-size: 1.5rem;

  a {
    border-bottom: 1px dashed #ddd;

    &:hover {
      color: #fff;
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={authorQuery}
    render={data => (
      <StyledFooter>
        <div>
          <FooterIcon
            url={data.site.siteMetadata.author.social.github}
            icon={faGithubSquare}
          />
          <FooterIcon
            url={data.site.siteMetadata.author.social.linkedin}
            icon={faLinkedin}
          />
          <FooterIcon
            url={data.site.siteMetadata.author.social.twitter}
            icon={faTwitterSquare}
          />
          <FooterIcon
            url={data.site.siteMetadata.author.social.medium}
            icon={faMedium}
          />
          <FooterIcon
            url={data.site.siteMetadata.author.social.email}
            icon={faEnvelope}
          />
        </div>
        <FooterMessage>
          Built with <span style={{ color: 'red' }}>❤</span> by{' '}
          <a
            href={data.site.siteMetadata.author.social.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.author.name}
          </a>
        </FooterMessage>
      </StyledFooter>
    )}
  />
)

export default Footer

const authorQuery = graphql`
  query AuthorQuery {
    site {
      siteMetadata {
        author {
          name
          social {
            website
            github
            linkedin
            twitter
            medium
            email
          }
        }
      }
    }
  }
`
