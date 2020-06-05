import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useThrottledFn, useWindowResize } from 'beautiful-react-hooks'

import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import { isBrowser } from '../../utils/isBrowser'
import { isLargeScreen } from '../../utils/screenSize'
import { formatDatetime } from '../../utils/formatDatetime'

import {
  Wrapper,
  MatchesWrapper,
  MatchBox,
  Date,
  ScoreBox,
  TeamIcon,
  ScoreWrapper,
  Score,
  Stadium,
  ButtonWrapper,
} from './RecentMatches.styles'

export const RecentMatches = ({ posts }) => {
  const {
    markdownRemark: {
      frontmatter: { matches, title },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/recent-matches/" } }) {
        frontmatter {
          title
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
      <SectionTitle>{title}</SectionTitle>
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
      <ButtonWrapper>
        <Button>
          <Link to="/schedule">See full schedule</Link>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}
