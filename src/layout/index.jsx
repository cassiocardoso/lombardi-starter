import React from 'react'
import { Grommet, Main } from 'grommet'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { customTheme } from '../theme'

const Layout = ({ children, location, title }) => {
  console.warn('TODO: layout :: Use location & title for Seo', location, title)

  return (
    <Grommet plain theme={customTheme}>
      <Header />
      <Main direction="column" align="center">
        {children}
      </Main>
      <Footer />
    </Grommet>
  )
}

export default Layout
