import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { MainContainer } from '../components/Container/Main'
import { Hero } from '../components/Hero'
import { HTMLWrapper } from '../components/HTMLWrapper'

const AboutPage = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout location={location}>
      <Hero title={frontmatter.title} showTitle />
      <MainContainer>
        <HTMLWrapper dangerouslySetInnerHTML={{ __html: html }} />
      </MainContainer>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { regex: "/about/" } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
