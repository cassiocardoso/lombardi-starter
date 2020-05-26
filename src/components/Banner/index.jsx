import React from 'react'
import { Box, Heading, Image } from 'grommet'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  margin: 0;
`

const StyledHeading = styled(Heading)`
  align-items: center;
  color: #fff;
  display: flex;
  font-weight: 700;
  height: 100%;
  justify-content: center;
  margin: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
`

export const Banner = () => (
  <Box height="medium" width={{ min: '100vw' }} style={{ position: 'relative' }}>
    <StyledImage a11yTitle="Team photo" fit="cover" src="/img/team-photo.jpg" />
    <StyledHeading>Team Name</StyledHeading>
  </Box>
)
