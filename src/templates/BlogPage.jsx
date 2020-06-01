import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../layout'
import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import { CardSideImage } from '../components/Card/CardSideImage'
import { Pagination } from '../components/Pagination'
import { getPostUrl } from '../utils/getPostUrl'

const Wrapper = styled.section`
  ${tw`flex flex-col mt-12`}
`

const PostWrapper = styled.div`
  ${tw`my-4 hover:shadow-lg`}
`

/**
 * The blog page must live in the `templates` folder so Gatsby can generate the pagination
 */
const BlogPage = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <Container>
        <Wrapper>
          {pageContext.currentPage === 1 && <SectionTitle>Latest posts:</SectionTitle>}
          <div>
            {posts.map(post => (
              <PostWrapper key={post.node.frontmatter.title}>
                <CardSideImage
                  image={post.node.frontmatter.banner}
                  title={post.node.frontmatter.title}
                  text={post.node.excerpt}
                  url={getPostUrl(post)}
                />
              </PostWrapper>
            ))}
          </div>
        </Wrapper>
        {pageContext.numPages > 1 && (
          <Pagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
        )}
      </Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            banner
            date(formatString: "DD/MM/YYYY")
            description
            title
            url
          }
          id
          timeToRead
        }
      }
    }
  }
`
