import React from 'react'
import { graphql } from 'gatsby'
import tw from 'twin.macro'

import Layout from '../layout'
import { BlogRoll } from '../components/BlogRoll'
import { MainContainer } from '../components/Container/Main'
import { Hero } from '../components/Hero'
import { RecentMatches } from '../components/RecentMatches'
import { SocialBanners } from '../components/SocialBanners'
import { Standings } from '../components/Standings'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Hero />
      <MainContainer>
        <BlogRoll posts={posts} />
        <RecentMatches />
        <div css={[tw`w-full flex my-6`]}>
          <div css={[tw`w-2/3`]}>
            <SocialBanners />
          </div>
          <div css={[tw`w-1/3 ml-4`]}>
            <Standings />
          </div>
        </div>
      </MainContainer>
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
