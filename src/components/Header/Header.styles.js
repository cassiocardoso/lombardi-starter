import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledHeader = styled.header`
	${tw`bg-gray-700 text-white transform translate-y-8`};
`

export const Logo = styled.a`
	${tw`flex relative items-center`};

	img {
		${tw`absolute w-auto h-auto m-0`};
		max-height: 120px;
		max-width: 100px
	}
`

export const StyledNav = styled.nav`
	${tw`md:ml-32 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap`}
`

export const StyledLink = styled.a`
	${tw`mr-3 py-1 px-2 rounded transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-800`}
	${({ active }) => active ? tw`bg-gray-900` : ''}
`
