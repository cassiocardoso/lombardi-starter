import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../layout'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { SectionTitle } from '../components/SectionTitle'
import { Table, TableBody, TableHead } from '../components/Table'
import { formatDatetime } from '../utils/formatDatetime'

const ContentWrapper = styled.section`
  ${tw`flex flex-col w-full`}
`

const TableWrapper = styled.div`
  ${tw`mt-4 mb-12`}
`

const SchedulePage = ({ data, location }) => {
  console.log('schedule page data >>>', data)
  const { matches } = data.markdownRemark.frontmatter

  return (
    <Layout location={location}>
			<Hero />
      <Container>
        <ContentWrapper>
          <SectionTitle>Schedule</SectionTitle>
          <TableWrapper>
            <Table>
              <TableHead>
                <tr>
                  <th>League</th>
                  <th>Home Team</th>
                  <th>Score</th>
                  <th>Away Team</th>
                  <th>Date</th>
                  <th>Stadium</th>
                </tr>
              </TableHead>
              <TableBody>
                {matches.map(match => (
                  <tr>
                    <td><span>League</span>{match.league}</td>
                    <td><span>Home team</span>{match.homeTeam}</td>
                    <td><span>Score</span>{`${match.homeTeamScore}x${match.awayTeamScore}`}</td>
                    <td><span>Away team</span>{match.awayTeam}</td>
                    <td><span>Date</span>{formatDatetime(match.date)}</td>
                    <td><span>Stadium</span>{match.stadium}</td>
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

export default SchedulePage

export const pageQuery = graphql`
  query SchedulePageQuery {
    markdownRemark(fields: { slug: { regex: "/schedule/" } }) {
      id
      frontmatter {
        matches {
          awayTeamIcon
          stadium
          awayTeamScore
          awayTeam
          date
          league
          homeTeamIcon
          homeTeamScore
          homeTeam
        }
      }
    }
  }
`
