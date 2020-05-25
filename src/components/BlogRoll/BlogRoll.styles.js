import styled from 'styled-components'
import { Heading, Image } from 'grommet'

import { customTheme } from '../../theme'

export const StyledImage = styled(Image)`
  margin: 0;
`
export const StyledHeading = styled(Heading)`
	margin: 1rem 0;

	&.featured {
	}

	&.secondary, &.snippet {
		font-size: 1.5rem;
	}
`;
