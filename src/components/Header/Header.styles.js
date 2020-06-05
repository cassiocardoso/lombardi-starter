import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import tw from 'twin.macro'

import theme from '../../theme'

export const StyledHeader = styled.header`
  ${tw`text-white transform translate-y-6`}
	background-color: ${theme.colors.primary}
`

export const Logo = styled(Link)`
  ${tw`flex relative items-center`}
`

export const ImageContainer = styled.div`
  ${tw`absolute`}
`

export const LogoImage = styled.img`
  ${tw`m-0 h-auto w-auto`}
  max-height: 80px;
  max-width: 80px;
`

export const StyledNav = styled.nav`
  ${tw`flex flex-wrap hidden md:block md:ml-24 md:py-1 md:pl-4 md:border-l md:border-gray-400`}
`

export const StyledLink = styled(Link)`
  ${tw`mr-3 py-2 px-2 rounded transition duration-300 ease-in-out hover:bg-gray-800`}
  ${({ active }) => (active ? tw`bg-gray-900` : '')}

	&:hover {
    background-color: ${lighten(0.1, theme.colors.primary)};
  }
`
