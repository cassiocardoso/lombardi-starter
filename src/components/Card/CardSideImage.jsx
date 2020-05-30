import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContentWrapper = styled.div`
  ${tw`p-4 flex flex-wrap border-2 border-gray-200 bg-white rounded-lg content-center shadow`}
`

const Image = styled.img`
  ${tw`rounded-lg mb-0`};
`

const Title = styled.h2`
  ${tw`text-2xl font-medium text-gray-900 mb-2`}
`

const TitleLink = styled(Link)`
  ${tw`hover:underline`}
`

const Text = styled.p`
  ${tw`leading-relaxed`}
`

export const CardSideImage = ({ image, title, text, url }) => {
  if (image) {
    return (
      <ContentWrapper>
        <div css={[tw`w-1/3`]}>
          <Link to={url}>
            <Image src={image} alt={title} />
          </Link>
        </div>
        <div css={[tw`w-2/3 pl-4`]}>
          <Title>
            <TitleLink to={url}>{title}</TitleLink>
          </Title>
          <Text>{text}</Text>
        </div>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <Title>
        <TitleLink to={url}>{title}</TitleLink>
      </Title>
      <Text>{text}</Text>
    </ContentWrapper>
  )
}
