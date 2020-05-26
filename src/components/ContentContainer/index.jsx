import React from 'react'
import { Box } from 'grommet'

export const ContentContainer = ({ children }) => (
	<Box width="xlarge" pad={{ vertical: 'large' }}>
		{children}
	</Box>
)
