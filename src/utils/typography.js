import Typography from 'typography'
import bootstrap from 'typography-theme-bootstrap'

const typography = new Typography(bootstrap)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
