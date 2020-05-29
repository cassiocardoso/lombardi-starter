import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledFooter = styled.footer`
  ${tw`bg-gray-400`}
`

export const FooterContentContainer = styled.div`
  ${tw`w-full flex flex-col`}
`

export const FooterGrid = styled.div`
  ${tw`flex flex-wrap`}
`

export const FooterColumn = styled.div`
  ${tw`p-5 w-56`}
`

export const ColumnTitle = styled.div`
  ${tw`text-sm uppercase font-medium text-gray-800`}
`

export const FooterText = styled.span`
  ${tw`my-3 text-gray-800 block`}
`

export const CopyrightWrapper = styled.div`
  ${tw`flex pb-5 px-3 m-auto mt-4 pt-5 border-t text-gray-800 text-sm flex-col md:flex-row`}
`

export const Copyright = styled.p`
  ${tw`mt-2`}
`

export const SocialIconsWrapper = styled.div`
  ${tw`md:flex-auto md:flex-row-reverse mt-2 flex-row flex`}
`
