import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const CardWrapper = styled.div`
  ${tw`border-2 border-gray-200 bg-white rounded-lg overflow-hidden shadow`}
`

const HeaderImage = styled.img`
  ${tw`md:h-32 m-0 w-full object-cover object-center`}
`

const CardContentWrapper = styled.div`
  ${tw`p-4`}
`

const Title = styled.h2`
  ${tw`text-xl font-medium text-gray-900 mb-0`}
`

const TitleLink = styled(Link)`
  ${tw`hover:underline`}
`

const Text = styled.p`
  ${tw`leading-relaxed mb-0`}
`

export const CardImageHeader = ({ text, image, title, url }) => {
  return (
    <CardWrapper>
      <Link to={url}>
        <HeaderImage src={image} alt="blog" />
      </Link>
      <CardContentWrapper>
        <Title>
          <TitleLink to={url}>{title}</TitleLink>
        </Title>
        <Text>{text}</Text>
      </CardContentWrapper>
    </CardWrapper>
  )
}
