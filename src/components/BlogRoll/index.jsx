import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { CardFullImage } from '../Card/CardFullImage'
import { CardImageHeader } from '../Card/CardImageHeader'
import { CardSideImage } from '../Card/CardSideImage'

const BlogRollContainer = styled.section`
  ${tw`container py-10 mx-auto w-full flex flex-wrap`}
`

const BlogRollRow = styled.div`
  ${tw`flex w-full`}
`

export const BlogRoll = ({ posts }) => {
  const [firstPost, secondPost, thirdPost, fourthPost, fifthPost] = posts

  return (
    <BlogRollContainer>
      <BlogRollRow>
        {firstPost && (
          <div css={[tw`w-2/3`]}>
            <CardFullImage
              image={firstPost.node.frontmatter.banner}
              title={firstPost.node.frontmatter.title}
              text={firstPost.node.excerpt}
              url={`/blog/${firstPost.node.frontmatter.url}`}
            />
          </div>
        )}
        {secondPost && thirdPost && (
          <div css={[tw`w-1/3 md:pl-2`]}>
            <CardImageHeader
              image={secondPost.node.frontmatter.banner}
              title={secondPost.node.frontmatter.title}
              text={secondPost.node.excerpt}
              url={`/blog/${secondPost.node.frontmatter.url}`}
            />
            <div css={[tw`md:mt-2`]}>
              <CardImageHeader
                image={thirdPost.node.frontmatter.banner}
                title={thirdPost.node.frontmatter.title}
                text={thirdPost.node.excerpt}
                url={`/blog/${thirdPost.node.frontmatter.url}`}
              />
            </div>
          </div>
        )}
      </BlogRollRow>
      {fourthPost && fifthPost && (
        <div css={[tw`mt-2 w-full`]}>
          <BlogRollRow>
            <div css={[tw`w-1/2`]}>
              <CardSideImage
                image={fourthPost.node.frontmatter.banner}
                title={fourthPost.node.frontmatter.title}
                text={fourthPost.node.excerpt}
                url={`/blog/${fourthPost.node.frontmatter.url}`}
              />
            </div>
            <div css={[tw`flex w-1/2 md:ml-2`]}>
              <CardSideImage
                title={fifthPost.node.frontmatter.title}
                text={fifthPost.node.excerpt}
                url={`/blog/${fifthPost.node.frontmatter.url}`}
              />
            </div>
          </BlogRollRow>
        </div>
      )}
    </BlogRollContainer>
  )
}
