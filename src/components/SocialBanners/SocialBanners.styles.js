import styled from 'styled-components'
import tw from 'twin.macro'

export const BannersWrapper = styled.div`
  ${tw`w-full flex flex-wrap`}
`

export const BannerWrapper = styled.div`
  ${tw`w-1/2 mb-4`}
`

export const Banner = styled.div`
  ${tw`h-full bg-white flex items-center border-gray-200 border p-4 rounded-lg mr-4`}
`

export const IconWrapper = styled.div`
  ${tw`bg-gray-300 p-4 mr-4 rounded-full`}
`

export const ContentWrapper = styled.div`
  ${tw`flex-grow`}
`

export const Title = styled.h4`
  ${tw`text-gray-900 font-medium`}

  a {
    ${tw`hover:underline hover:text-blue-500`}
  }
`

export const Text = styled.p`
  ${tw`text-gray-500`}
`
