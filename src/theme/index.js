import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

export const customTheme = deepMerge(grommet, {
	global: {
		colors: {
			brand: '#f04',
		},
	},
})
