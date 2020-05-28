import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Heading, Image, Text, ResponsiveContext } from 'grommet'
import { styled } from 'styled-components'

import { isMobileSize } from '../../utils/isMobileSize'
import { MatchBox } from './MatchBox'

export const RecentMatches = () => {
  const {
    markdownRemark: {
      frontmatter: { matches },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/schedule/" } }) {
        frontmatter {
          matches {
            awayTeam
            awayTeamIcon
            awayTeamScore
            date
            homeTeam
            homeTeamIcon
            homeTeamScore
            league
            stadium
          }
        }
      }
    }
  `)
  const windowSize = useContext(ResponsiveContext)

  return (
    <Box margin={{ vertical: 'large' }}>
      <Heading level="3">Últimas Partidas</Heading>
      <Box
        direction={isMobileSize(windowSize) ? 'column' : 'row'}
        background="light-1"
        elevation="medium"
        pad={{ horizontal: 'xsmall', vertical: 'medium' }}
      >
        {matches.map((match, index) => {
          const isLastItem = index === matches.length - 1

          return <MatchBox match={match} hideBorder={isLastItem || isMobileSize(windowSize)} />
        })}
      </Box>
    </Box>
  )
}
