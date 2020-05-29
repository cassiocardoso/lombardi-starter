// Gatsby supports TypeScript natively!
import React from 'react'

import Layout from '../layout'
import { Container } from '../components/Container'

const TeamPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>team</Container>
    </Layout>
  )
}

export default TeamPage
