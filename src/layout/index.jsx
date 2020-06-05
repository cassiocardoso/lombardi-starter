import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const StyledLayout = styled.div`
  ${tw`bg-gray-100 min-h-screen`}
`

// TODO: layout :: Use location & title for Seo
const Layout = ({ children, location, title }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
