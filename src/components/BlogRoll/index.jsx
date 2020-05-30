import React, { useState } from 'react'
import { useThrottledFn, useWindowResize } from 'beautiful-react-hooks'

import { isBrowser } from '../../utils/isBrowser'
import { isMediumScreen } from '../../utils/screenSize'

import { DesktopLayout } from './Desktop'
import { MobileLayout } from './Mobile'

export const BlogRoll = ({ posts }) => {
	const [windowWidth, setWindowWidth] = useState(isBrowser() ? window.innerWidth : 0)

	useWindowResize(
    useThrottledFn(event => {
      setWindowWidth(window.innerWidth)
    })
  )

	return isMediumScreen(windowWidth) ? <MobileLayout posts={posts} /> : <DesktopLayout posts={posts} />
}
