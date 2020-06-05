import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionTitle } from '../SectionTitle'
import { Table, TableHead, TableBody } from '../Table/Stripped'

import { Wrapper, TableWrapper, TeamIcon } from './Standings.styles'

export const Standings = () => {
  const {
    markdownRemark: {
      frontmatter: { teams, title },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/standings/" } }) {
        frontmatter {
          title
          teams {
            position
            wins
            losses
            draws
            icon
            name
          }
        }
      }
    }
  `)

  // Guarantee teams are sorted by the current ranking poisiton
  const sortedTeams = teams.sort((a, b) => a.position - b.position)

  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <Wrapper>
        <TableWrapper>
          <Table>
            <TableHead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
              </tr>
            </TableHead>
            <TableBody>
              {sortedTeams.map(team => (
                <tr key={team.name}>
                  <td>{team.position}</td>
                  <td>
                    <TeamIcon src={team.icon} alt={team.name} /> {team.name}
                  </td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Wrapper>
    </div>
  )
}
