import React from 'react'
import { Anchor, Box } from 'grommet'

import { getPostUrl } from '../../utils/getPostUrl'

import { StyledHeading, StyledImage } from './BlogRoll.styles'

export const MobileBlogRoll = ({ posts }) => (
  <Box>
    {posts.map(post => (
      <Box
        key={post.node.fields.slug}
        direction="column"
        border={{ color: 'brand', size: 'small' }}
        margin={{ bottom: 'small' }}
        pad="medium"
      >
        <Box height="small">
          <StyledImage fit="cover" src={post.node.frontmatter.banner} />
        </Box>
        <Box pad="small">
          <Anchor href={getPostUrl(post)}>
            <StyledHeading level="2" className="snippet">
              {post.node.frontmatter.title}
            </StyledHeading>
          </Anchor>
        </Box>
      </Box>
    ))}
  </Box>
)
