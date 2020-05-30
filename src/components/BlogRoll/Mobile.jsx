import React from 'react'

import { CardSideImage } from '../Card/CardSideImage'
import { getPostUrl } from '../../utils/getPostUrl'

import { BlogRollContainer, BlogRollRow, MobileCardWrapper } from './BlogRoll.styles'

export const MobileLayout = ({ posts }) => {
  return (
    <BlogRollContainer>
      {posts.map(post => (
        <MobileCardWrapper key={post.node.frontmatter.title}>
          <CardSideImage
            image={post.node.frontmatter.banner}
            title={post.node.frontmatter.title}
            text={post.node.excerpt}
            url={getPostUrl(post)}
          />
        </MobileCardWrapper>
      ))}
    </BlogRollContainer>
  )
}
