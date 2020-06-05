import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NavWrapper = styled.div`
  ${tw`flex w-full justify-center my-12`}
`

const NavContainer = styled.div`
  ${tw`flex bg-white border-gray-200 border rounded-lg`}
`

const NavLink = styled(Link)`
  ${tw`h-full flex items-center p-4 hover:bg-blue-500 hover:border-blue-500 hover:text-white`}

  &:not(:last-of-type) {
    ${tw`border-r border-gray-200`}
  }

  &:first-of-type {
    ${tw`rounded-l-lg`}
  }

  &:last-of-type {
    ${tw`rounded-r-lg`}
  }

  &.active {
    ${tw`bg-blue-500 border-blue-500 text-white`}
  }

  &.disabled {
    ${tw`cursor-not-allowed bg-gray-300 border-gray-300 pointer-events-none text-gray-500`}
  }
`

export const Pagination = ({ currentPage, numPages }) => {
  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < numPages
  const prevPageLink = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPageLink = `/blog/${currentPage + 1}`

  return (
    <NavWrapper>
      <NavContainer>
        <NavLink to="/blog" className={`${!hasPrevPage ? 'disabled' : ''}`}>
          First
        </NavLink>
        <NavLink to={prevPageLink} className={`${!hasPrevPage ? 'disabled' : ''}`}>
          <IoIosArrowBack size={20} />
          Prev
        </NavLink>
        {Array.from({ length: numPages }).map((_, i) => (
          <NavLink
            key={i}
            to={`${i === 0 ? '/blog' : `/blog/${i + 1}`}`}
            className={`${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </NavLink>
        ))}
        <NavLink to={nextPageLink} className={`${!hasNextPage ? 'disabled' : ''}`}>
          Next
          <IoIosArrowForward size={20} />
        </NavLink>
        <NavLink to={`/blog/${numPages}`} className={`${!hasNextPage ? 'disabled' : ''}`}>
          Last
        </NavLink>
      </NavContainer>
    </NavWrapper>
  )
}
