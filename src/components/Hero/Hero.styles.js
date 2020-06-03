import styled from 'styled-components'
import tw from 'twin.macro'

export const HeroWrapper = styled.div`
  ${tw`overflow-hidden flex items-center justify-center`};
  background-image: url(${({ image }) => image});
  background-position: 50%;
  height: 28rem;
`

export const HeroTitle = styled.p`
  ${tw`text-5xl font-bold text-white`};
`
