import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ExternalLink } from '../../components/Link/External'
import { getIcon } from '../../utils/getIcon'

import { IconsWrapper, IconWrapper } from './SocialLinks.styles'

export const SocialLinks = () => {
  const {
    markdownRemark: {
      frontmatter: { profiles },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/social-profiles/" } }) {
        frontmatter {
          profiles {
            url
            platform
          }
        }
      }
    }
  `)

  return (
    <IconsWrapper>
      {profiles.map(profile => (
        <ExternalLink key={profile.platform} href={profile.url}>
          <IconWrapper>{getIcon(profile.platform)}</IconWrapper>
        </ExternalLink>
      ))}
    </IconsWrapper>
  )
}
