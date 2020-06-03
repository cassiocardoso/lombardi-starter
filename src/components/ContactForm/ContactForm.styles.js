import styled from 'styled-components'
import tw from 'twin.macro'

export const FormWrapper = styled.div`
  ${tw`lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 md:px-8 mt-8 md:mt-0 rounded-lg`}

  h2 {
    ${tw`text-gray-900 text-lg mb-1 font-medium`}
  }

  p {
    ${tw`leading-relaxed mb-5 text-gray-600`}
  }
`

export const FormGroup = styled.div`
  ${tw`relative mb-4`}
`

export const Label = styled.label`
  ${tw`leading-7 text-sm text-gray-600`}
`

export const Input = styled.input`
  ${tw`w-full bg-white rounded border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
`

export const Textarea = styled.textarea`
  ${tw`w-full bg-white rounded border border-gray-300 focus:border-gray-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
`

export const Submit = styled.button`
  ${tw`text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg`}
`

export const ContentWrapper = styled.div`
  ${tw`py-24`}

  h2 {
    ${tw`text-gray-900 text-lg mb-1 font-medium mb-8`}
  }
`
