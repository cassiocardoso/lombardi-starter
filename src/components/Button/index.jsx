import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const BaseButton = styled.button`
  ${tw`bg-transparent border-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border hover:bg-blue-500 hover:border-transparent rounded`}
`

export const Button = ({ children }) => {
  return <BaseButton>{children}</BaseButton>
}
