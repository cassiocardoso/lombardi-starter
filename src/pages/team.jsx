import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../layout'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { SectionTitle } from '../components/SectionTitle'
import { Table, TableHead, TableBody } from '../components/Table'

const ContentWrapper = styled.section`
  ${tw`flex flex-col w-full`}
`

const TableWrapper = styled.div`
  ${tw`mt-4 mb-12`}
`

const TeamPage = ({ data, location }) => {
  const { title, players, coaches } = data.markdownRemark.frontmatter

  return (
    <Layout location={location}>
      <Hero title={title} />
      <Container>
        <ContentWrapper>
          <SectionTitle>Players</SectionTitle>
          <TableWrapper>
            <Table>
              <TableHead>
                <tr>
                  <th width="80px">Number</th>
                  <th>Name</th>
                  <th width="200px">Position</th>
                </tr>
              </TableHead>
              <TableBody>
                {players.map(player => (
                  <tr key={`${player.number}-${player.name}`}>
                    <td>
                      <span>Number</span>
                      {player.number}
                    </td>
                    <td>
                      <span>Name</span>
                      {player.name}
                    </td>
                    <td>
                      <span>Position</span>
                      {player.position.join(', ')}
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
          <SectionTitle>Coaches</SectionTitle>
          <TableWrapper>
            <Table>
              <TableHead>
                <tr>
                  <th>Job Title</th>
                  <th>Name</th>
                </tr>
              </TableHead>
              <TableBody>
                {coaches.map(coach => (
                  <tr key={coach.name}>
                    <td width="300px">
                      <span>Job Title</span>
                      {coach.type}
                    </td>
                    <td>
                      <span>Name</span>
                      {coach.name}
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query TeamPageQuery {
    markdownRemark(fields: { slug: { regex: "/team/" } }) {
      id
      frontmatter {
        title
        players {
          number
          name
          position
        }
        coaches {
          type
          name
        }
      }
    }
  }
`
