import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ButtonContainer = styled.div`
  ${tw`absolute left-0 flex items-center bottom-auto z-10 md:hidden`};
  top: 12px;
`

export const MenuButton = ({ handleClick, isOpen }) => {
  return (
    <ButtonContainer onClick={() => handleClick(!isOpen)}>
      <button
        css={[
          tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out`,
        ]}
        aria-label="Main menu"
        aria-expanded="false"
      >
        {/* Icon when menu is closed */}
        {/* Menu open: "hidden", Menu closed: "block" */}
        <svg css={[tw`block h-6 w-6`]} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* Icon when menu is open */}
        {/* Menu open: "block", Menu closed: "hidden" */}
        <svg css={[tw`hidden h-6 w-6`]} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </ButtonContainer>
  )
}
