import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../theme'

const BaseButton = styled.button`
  ${tw`bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`}
	border-color: ${theme.colors.primary};
	color: ${theme.colors.primary};

	&:hover {
		background-color: ${theme.colors.primary}
	}
`

export const Button = ({ children }) => {
  return <BaseButton>{children}</BaseButton>
}
