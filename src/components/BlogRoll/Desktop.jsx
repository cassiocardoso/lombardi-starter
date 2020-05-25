import React, { Fragment } from 'react'
import { Anchor, Box } from 'grommet'

import { getPostUrl } from '../../utils/getPostUrl'

import { StyledHeading, StyledImage } from './BlogRoll.styles'

export const DesktopBlogRoll = ({ posts }) => {
  const [firstPost, secondPost, thirdPost, fourthPost, fifthPost] = posts

  return (
    <Fragment>
      <Box direction="row">
        {firstPost && (
          <Box basis="2/3" border={{ color: 'brand', size: 'small' }}>
            <StyledImage fit="cover" src={firstPost.node.frontmatter.banner} />
            <Box pad="small">
              <Anchor href={getPostUrl(firstPost)}>
                <StyledHeading level="2" className="featured">
                  {firstPost.node.frontmatter.title}
                </StyledHeading>
              </Anchor>
            </Box>
          </Box>
        )}
        <Box basis="1/3" direction="column" margin={{ left: 'xsmall' }}>
          {secondPost && (
            <Box basis="2/3" border={{ color: 'brand', size: 'small' }}>
              <StyledImage fill="horizontal" fit="cover" src={secondPost.node.frontmatter.banner} />
              <Box pad="xsmall">
                <Anchor href={getPostUrl(secondPost)}>
                  <StyledHeading level="2" className="secondary">
                    {secondPost.node.frontmatter.title}
                  </StyledHeading>
                </Anchor>
              </Box>
            </Box>
          )}
          {thirdPost && (
            <Box basis="2/3" border={{ color: 'brand', size: 'small' }} margin={{ top: 'xsmall' }}>
              <StyledImage fill="horizontal" fit="cover" src={thirdPost.node.frontmatter.banner} />
              <Box pad="xsmall">
                <Anchor href={getPostUrl(thirdPost)}>
                  <StyledHeading level="2" className="secondary">
                    {thirdPost.node.frontmatter.title}
                  </StyledHeading>
                </Anchor>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box direction="row" margin={{ top: 'xsmall' }} height="small">
        {fourthPost && (
          <Box
            basis="1/2"
            background="brand"
            direction="row"
            border={{ color: 'brand', size: 'xlarge' }}
          >
            <Box basis="1/2">
              <StyledImage fit="cover" src={fourthPost.node.frontmatter.banner} />
            </Box>
            <Box basis="1/2" pad="medium">
              <Anchor href={getPostUrl(fourthPost)}>
                <StyledHeading level="2" className="snippet">
                  {fourthPost.node.frontmatter.title}
                </StyledHeading>
              </Anchor>
            </Box>
          </Box>
        )}
        {fifthPost && (
          <Box
            basis="1/2"
            direction="row"
            border={{ color: 'brand', size: 'small' }}
            margin={{ left: 'xsmall' }}
            pad="medium"
          >
            <Box basis="1/2">
              <StyledImage fit="cover" src={fifthPost.node.frontmatter.banner} />
            </Box>
            <Box basis="1/2" pad="medium">
              <Anchor href={getPostUrl(fifthPost)}>
                <StyledHeading level="2" className="snippet">
                  {fifthPost.node.frontmatter.title}
                </StyledHeading>
              </Anchor>
            </Box>
          </Box>
        )}
      </Box>
    </Fragment>
  )
}
