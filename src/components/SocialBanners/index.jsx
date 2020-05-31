import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ExternalLink } from '../Link/External'
import { SectionTitle } from '../SectionTitle'
import { getIcon } from '../../utils/getIcon'

import {
  BannersWrapper,
  BannerWrapper,
  Banner,
  IconWrapper,
  ContentWrapper,
  Title,
  Text,
} from './SocialBanners.styles'

export const SocialBanners = () => {
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
            username
            platform
          }
        }
      }
    }
  `)

  return (
    <section>
      <SectionTitle>Follow us!</SectionTitle>
      <BannersWrapper>
        {profiles.map(profile => (
          <BannerWrapper key={profile.url}>
            <Banner>
              <ExternalLink href={profile.url}>
                <IconWrapper>{getIcon(profile.platform)}</IconWrapper>
              </ExternalLink>
              <ContentWrapper>
                <Title>
                  <ExternalLink href={profile.url}>{profile.username}</ExternalLink>
                </Title>
                <Text>{profile.platform}</Text>
              </ContentWrapper>
            </Banner>
          </BannerWrapper>
        ))}
      </BannersWrapper>
    </section>
  )
}
