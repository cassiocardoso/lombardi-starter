// Gatsby supports TypeScript natively!
import React from 'react'

import Layout from '../layout'
import { Container } from '../components/Container'

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>
        about
      </Container>
    </Layout>
  )
}

export default AboutPage
