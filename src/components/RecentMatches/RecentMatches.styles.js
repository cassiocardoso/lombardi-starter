import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.section`
  ${tw`w-full my-6`}
`

export const MatchesWrapper = styled.div`
  ${tw`bg-white rounded-lg shadow px-4 py-8 flex`}

  &.mobile {
    ${tw`flex-col py-2`}
  }
`

export const MatchBox = styled.div`
  ${tw`w-1/3 flex flex-col items-center`}
  &:not(:last-child) {
    ${tw`border-r border-solid`}
  }

  &.mobile {
    ${tw`w-full border-r-0 py-8`}

    &:not(:last-child) {
      ${tw`border-b`}
    }
  }
`

export const TeamIcon = styled.img`
  ${tw`m-0`};
  height: 6rem;
`

export const ScoreBox = styled.div`
  ${tw`flex items-center py-2`}
`

export const ScoreWrapper = styled.div`
  ${tw`flex items-center mx-4`}

  span {
    ${tw`text-gray-400 mx-2 italic text-xl`}
  }
`

export const Score = styled.div`
  ${tw`italic text-4xl font-black`}
`

export const Date = styled.div`
  ${tw`text-gray-500 text-sm`}
`

export const Stadium = styled.div`
  ${tw`text-sm`}
`
export const ButtonWrapper = styled.div`
  ${tw`flex mt-4 justify-center`}
`
