import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledTitle = styled.h2`
  ${tw`text-3xl font-medium pb-4`}
`

const Divider = styled.hr`
  ${tw`mb-6 bg-gray-400`}
  height: 2px;
  width: 50px;
`

export const SectionTitle = ({ children }) => (
  <div>
    <StyledTitle>{children}</StyledTitle>
    <Divider />
  </div>
)
