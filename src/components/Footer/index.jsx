import React from 'react'
import { Box } from 'grommet'

export const Footer = () => (
  <Box as="footer" direction="row" justify="center">
    <Box width="xlarge">© {new Date().getFullYear()}, Lombardi Starter</Box>
  </Box>
)
