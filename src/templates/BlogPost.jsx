import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { ArticleWrapper } from '../components/ArticleWrapper'
import { HTMLWrapper } from '../components/HTMLWrapper'
import { MainContainer } from '../components/Container/Main'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <MainContainer>
        <HTMLWrapper>
          <ArticleWrapper
            banner={post.frontmatter.banner}
            content={post.html}
            date={post.frontmatter.date}
            id={post.id}
            next={next}
            previous={previous}
            title={post.frontmatter.title}
            url={post.frontmatter.url}
          />
        </HTMLWrapper>
      </MainContainer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner
        url
      }
    }
  }
`
