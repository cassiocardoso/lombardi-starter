import React from 'react'
import { Box, Image, Text } from 'grommet'

const TeamIcon = ({ icon, width = 100 }) => <Image src={icon} width={width} margin="0" />

export const MatchBox = ({ match, hideBorder }) => {
  const [year, month, day] = match.date.split('T')[0].split('-')

  return (
    <Box
      direction="row"
      margin="xxsmall"
      pad="small"
      basis="1/3"
      justify="between"
      background="light-1"
      border={hideBorder ? false : { color: 'light-4', size: 'xsmall', side: 'right' }}
    >
      <Box>
        <TeamIcon icon={match.homeTeamIcon} />
      </Box>
      <Box justify="center" align="center" pad="xsmall">
        <Text size="xsmall">{`${day}/${month}/${year}`}</Text>
        <Text
          size="xlarge"
          weight="bold"
          margin={{ vertical: 'xsmall' }}
        >{`${match.homeTeamScore} x ${match.awayTeamScore}`}</Text>
        <Text size="xsmall">{match.stadium}</Text>
      </Box>
      <Box>
        <TeamIcon icon={match.awayTeamIcon} />
      </Box>
    </Box>
  )
}
