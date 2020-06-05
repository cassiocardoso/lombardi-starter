import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import theme from '../theme'

const StyledLayout = styled.div`
  ${tw`min-h-screen`}
	background-color: ${theme.colors.background};
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
