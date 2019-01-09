import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import logo from '../images/bc.png'

function SEO({ description, lang, meta, keywords, title, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const url = `${data.site.siteMetadata.siteUrl}${pathname}`

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: logo,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author.twitterUser,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:image`,
                content: logo,
              },
              {
                name: `og:url`,
                content: url,
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  pathname: '',
  meta: [],
  keywords: [
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
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  pathname: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author {
          twitterUser
        }
      }
    }
  }
`
