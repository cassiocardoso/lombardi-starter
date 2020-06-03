import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-wrap flex-col md:flex-row items-center mb-12`}
`

export const MainContainer = ({ children }) => <StyledContainer>{children}</StyledContainer>
