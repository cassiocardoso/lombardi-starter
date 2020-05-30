// Gatsby supports TypeScript natively!
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { BlogRoll } from '../components/BlogRoll'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Hero />
      <Container>
        <BlogRoll posts={posts} />
      </Container>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            banner
            date(formatString: "MMMM DD, YYYY")
            description
            title
            url
          }
        }
      }
    }
  }
`
