import styled from 'styled-components'
import tw from 'twin.macro'

export const Table = styled.table`
  ${tw`border-collapse w-full`}
`

export const TableHead = styled.thead`
  th {
    ${tw`p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell text-center`}
  }
`

export const TableBody = styled.tbody`
  tr {
    ${tw`bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0`}
  }

  td {
    ${tw`w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static`}

    &:not(:first-child) {
      ${tw`text-center`}
    }

    /**
		 * This span is used on mobile to show the column name as a label
		 */
    span {
      ${tw`lg:hidden absolute top-0 left-0 bg-gray-200 px-2 py-1 font-bold uppercase`}
      font-size: 0.7rem;
    }
  }
`
