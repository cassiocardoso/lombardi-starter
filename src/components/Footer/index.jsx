import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import config from '../../../lombardi.config'
import { Container } from '../Container'
import { SocialLinks } from '../SocialLinks'

import {
  StyledFooter,
  FooterContentContainer,
  FooterGrid,
  FooterColumn,
  ColumnTitle,
  FooterText,
  CopyrightWrapper,
  Copyright,
  SocialIconsWrapper,
} from './Footer.styles'

export const Footer = () => {
  const {
    markdownRemark: {
      frontmatter: { items },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/menu/" } }) {
        frontmatter {
          items {
            url
            label
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Container>
        <FooterContentContainer>
          <FooterGrid>
            <FooterColumn>
              <ColumnTitle>Home</ColumnTitle>
              {items.map(item => (
                <Link key={item.label} to={item.url}>
                  <FooterText>{item.label}</FooterText>
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Contact us</ColumnTitle>
              <FooterText>{config.contact.address}</FooterText>
              <FooterText>{config.contact.email}</FooterText>
            </FooterColumn>
          </FooterGrid>

          <div>
            <CopyrightWrapper>
              <Copyright>{config.copyright}</Copyright>
              <SocialIconsWrapper>
                <SocialLinks />
              </SocialIconsWrapper>
            </CopyrightWrapper>
          </div>
        </FooterContentContainer>
      </Container>
    </StyledFooter>
  )
}
