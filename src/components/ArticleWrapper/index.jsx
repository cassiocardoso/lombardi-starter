import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import Disqus from 'react-disqus-comments'

import config from '../../../lombardi.config'

const StyledArticle = styled.article`
  ${tw``}
`

const Header = styled.header`
  ${tw``}
`

const Title = styled.h1`
  ${tw``}
`

const Banner = styled.img`
  ${tw`w-full`}
`

const Content = styled.section``

const Footer = styled.footer`
  ${tw`my-12`}
`

const Nav = styled.nav`
  ${tw`flex justify-between mt-8`}
`

const NavLink = styled(Link)`
  ${tw`h-full bg-white flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-500 hover:text-white`}
`

const Text = styled.span`
  ${tw`truncate mx-2`}
  max-width: 15rem;
`

export const ArticleWrapper = ({ banner, content, date, id, title, previous, next, url }) => {
  return (
    <StyledArticle>
      <Header>
        <Title>{title}</Title>
        <Banner src={banner} alt={title} />
        <p>{date}</p>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Footer>
        <Disqus
          shortname={config.disqus.shortname}
          identifier={id}
          title={title}
          url={`${config.siteUrl}/blog/${url}`}
        />
      </Footer>
      <Nav>
        {previous && (
          <NavLink to={`/blog/${previous.frontmatter.url}`} rel="prev">
            ← <Text>{previous.frontmatter.title}</Text>
          </NavLink>
        )}
        {next && (
          <NavLink to={`/blog/${next.frontmatter.url}`} rel="next">
            <Text>{next.frontmatter.title}</Text> →
          </NavLink>
        )}
      </Nav>
    </StyledArticle>
  )
}
