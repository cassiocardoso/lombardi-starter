import React from 'react'

import { isMediumScreen } from '../../utils/screenSize'

import { StyledNav, StyledLink } from './Header.styles'

export const DesktopMenu = ({ currentPath, items, windowWidth }) => {
  if (isMediumScreen(windowWidth)) {
    return null
  }

  return (
    <StyledNav>
      {items.map(item => (
        <StyledLink
          key={item.label}
          to={item.url}
          active={currentPath === item.url.replace(/\//g, '')}
        >
          {item.label}
        </StyledLink>
      ))}
    </StyledNav>
  )
}
