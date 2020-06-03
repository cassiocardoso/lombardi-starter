import styled from 'styled-components'
import tw from 'twin.macro'

export const Table = styled.table`
  ${tw`min-w-full bg-white mb-0 table-auto`}
`

export const TableHead = styled.thead`
  ${tw`bg-gray-800 text-white`}

  th {
    ${tw`p-2 uppercase font-semibold text-sm`}
  }
`

export const TableBody = styled.tbody`
  ${tw`text-gray-700`}

  tr {
    ${tw`bg-white text-sm`}

    &:nth-child(even) {
      ${tw`bg-gray-100`}
    }
  }

  td {
    ${tw`p-2 text-left`}
  }
`
