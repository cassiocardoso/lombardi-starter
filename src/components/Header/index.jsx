import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { isBrowser } from '../../utils/isBrowser'
import { Container } from '../Container'

import { StyledHeader, Logo, StyledNav, StyledLink } from './Header.styles'

export const Header = props => {
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
  const currentPath = isBrowser() ? window.location.pathname.replace(/\//g, '') : ''

  return (
    <StyledHeader>
      <Container>
        <Logo href="/">
          <img src="/img/baltimore-ravens.png" />
        </Logo>
        <StyledNav>
          {items.map(item => (
            <StyledLink
              key={item.label}
              href={item.url}
              active={currentPath === item.url.replace(/\//g, '')}
            >
              {item.label}
            </StyledLink>
          ))}
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}
