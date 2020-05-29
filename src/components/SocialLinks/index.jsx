import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import { IconsWrapper, IconWrapper } from './SocialLinks.styles'

const getIcon = (platform, size = 20) => {
  switch (platform) {
    case 'Facebook':
      return <FaFacebook size={size} />
    case 'Instagram':
      return <FaInstagram size={size} />
    case 'Twitter':
      return <FaTwitter size={size} />
    case 'Youtube':
      return <FaYoutube size={size} />
    default:
      return null
  }
}

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
        <a key={profile.platform} href={profile.url} target="_blank" rel="noopener noreferrer">
          <IconWrapper>{getIcon(profile.platform)}</IconWrapper>
        </a>
      ))}
    </IconsWrapper>
  )
}
