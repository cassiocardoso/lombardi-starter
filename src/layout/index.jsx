import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const StyledLayout = styled.div`
  ${tw`bg-gray-100 min-h-screen`}
`

// The margin is used to compensate the top spacing of the navbar
const StyledMain = styled.main`
  ${tw`mt-8`}
`

const Layout = ({ children, location, title }) => {
  console.log('TODO: layout :: Use location & title for Seo', location, title)

  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
