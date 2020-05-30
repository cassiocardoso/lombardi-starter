import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useThrottledFn, useWindowResize } from 'beautiful-react-hooks'

import { isBrowser } from '../../utils/isBrowser'
import { isLargeScreen } from '../../utils/screenSize'
import { formatDatetime } from '../../utils/formatDatetime'

import {
  Wrapper,
  Title,
  MatchesWrapper,
  MatchBox,
  Date,
  ScoreBox,
  TeamIcon,
  ScoreWrapper,
  Score,
  Stadium,
} from './RecentMatches.styles'

export const RecentMatches = ({ posts }) => {
  const {
    markdownRemark: {
      frontmatter: { matches },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/recent-matches/" } }) {
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
  `)
  const [windowWidth, setWindowWidth] = useState(isBrowser() ? window.innerWidth : 0)

  useWindowResize(
    useThrottledFn(event => {
      setWindowWidth(window.innerWidth)
    })
  )

  return (
    <Wrapper>
      <Title>Recent Matches</Title>
      <MatchesWrapper className={`${isLargeScreen(windowWidth) ? 'mobile' : ''}`}>
        {matches.map(match => (
          <MatchBox
            key={`${match.homeTeam}-${match.date}`}
            className={`${isLargeScreen(windowWidth) ? 'mobile' : ''}`}
          >
            <Date>{formatDatetime(match.date)}</Date>
            <ScoreBox>
              <TeamIcon src={match.homeTeamIcon} alt={match.homeTeam} />
              <ScoreWrapper>
                <Score>{match.homeTeamScore}</Score>
                <span>x</span>
                <Score>{match.awayTeamScore}</Score>
              </ScoreWrapper>
              <TeamIcon src={match.awayTeamIcon} alt={match.awayTeam} />
            </ScoreBox>
            <Stadium>{match.stadium}</Stadium>
          </MatchBox>
        ))}
      </MatchesWrapper>
    </Wrapper>
  )
}
