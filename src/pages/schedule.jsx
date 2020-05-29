// Gatsby supports TypeScript natively!
import React from 'react'

import Layout from '../layout'
import { Container } from '../components/Container'

const SchedulePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>schedule</Container>
    </Layout>
  )
}

export default SchedulePage
