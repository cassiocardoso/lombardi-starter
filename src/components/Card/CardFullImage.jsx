import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const CardWrapper = styled.div`
  ${tw`border-2 border-gray-200 bg-white rounded-lg overflow-hidden h-full relative`}
`

const Image = styled.img`
  ${tw`h-full m-0 w-full object-cover object-center z-0`}
`

const ContentContainer = styled.div`
  ${tw`absolute p-4 rounded-lg bg-white max-w-xl`}
  bottom: 1rem;
  left: 1rem;
`

const Title = styled.h2`
  ${tw`text-3xl font-medium text-gray-900 mb-2`}
`

const TitleLink = styled(Link)`
  ${tw`hover:underline`}
`

const Text = styled.p`
  ${tw`leading-relaxed`}
`

export const CardFullImage = ({ image, title, text, url }) => {
  return (
    <CardWrapper>
      <Link to={url}>
        <Image src={image} alt={title} />
      </Link>
      <ContentContainer>
        <Title>
          <TitleLink to={url}>{title}</TitleLink>
        </Title>
        <Text>{text}</Text>
      </ContentContainer>
    </CardWrapper>
  )
}
