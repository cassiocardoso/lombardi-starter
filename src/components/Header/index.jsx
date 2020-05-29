import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useThrottledFn, useWindowResize } from 'beautiful-react-hooks'

import config from '../../../lombardi.config'
import { isBrowser } from '../../utils/isBrowser'
import { isMediumScreen } from '../../utils/screenSize'
import { Container } from '../Container'

import { MenuButton } from './MenuButton'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { StyledHeader, Logo, ImageContainer, LogoImage } from './Header.styles'

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
  const [menuIsOpen, toggleMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(isBrowser() ? window.innerWidth : 0)
  const currentPath = isBrowser() ? window.location.pathname.replace(/\//g, '') : ''

  useWindowResize(
    useThrottledFn(event => {
      setWindowWidth(window.innerWidth)
    })
  )

  return (
    <StyledHeader>
      <Container>
        <MenuButton isOpen={menuIsOpen} handleClick={toggleMenu} />
        <Logo to="/">
          {isMediumScreen(windowWidth) ? (
            <span>{config.teamName}</span>
          ) : (
            <ImageContainer>
              <LogoImage src="/img/ravens-b.png" />
            </ImageContainer>
          )}
        </Logo>
        <DesktopMenu currentPath={currentPath} items={items} windowWidth={windowWidth} />
      </Container>
      {menuIsOpen && <MobileMenu currentPath={currentPath} items={items} toggleMenu={toggleMenu} />}
    </StyledHeader>
  )
}
