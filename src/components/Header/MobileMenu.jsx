import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`absolute`}
`

const Overlay = styled.div`
  ${tw`absolute inset-0 h-screen w-screen z-0`}
  background-color: transparent;
  transform: translateY(-6rem);
`

const ContentWrapper = styled.div`
  ${tw`flex flex-col sm:flex-row sm:justify-around`}
`

const Content = styled.div`
  ${tw`w-64 h-screen bg-gray-800 z-10 sm:mt-0`}
`

const MenuNav = styled.nav`
  ${tw`mt-10`}
`

const MenuLink = styled(Link)`
  ${tw`flex items-center mt-5 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 focus:outline-none`}
  ${({ active }) => (active ? tw`bg-gray-700 border-gray-100` : '')}

	span {
    ${tw`mx-4 font-medium`}
  }
`

export const MobileMenu = ({ currentPath, items, toggleMenu }) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <MenuNav>
            {items.map(item => (
              <MenuLink
                key={item.label}
                to={item.url}
                active={currentPath === item.url.replace(/\//g, '')}
              >
                {item.label}
              </MenuLink>
            ))}
          </MenuNav>
        </Content>
      </ContentWrapper>
      <Overlay onClick={() => toggleMenu(false)} />
    </Container>
  )
}
