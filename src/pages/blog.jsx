// Gatsby supports TypeScript natively!
import React from 'react'

import Layout from '../layout'
import { Container } from '../components/Container'

const BlogPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>blog</Container>
    </Layout>
  )
}

export default BlogPage
