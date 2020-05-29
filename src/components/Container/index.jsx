import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`}
`

export const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>
