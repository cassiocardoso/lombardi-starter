import React, { useState } from 'react'
import { useThrottledFn, useWindowResize } from 'beautiful-react-hooks'

import { isBrowser } from '../../utils/isBrowser'
import { DesktopBlogRoll } from './Desktop'
import { MobileBlogRoll } from './Mobile'

export const BlogRoll = ({ posts }) => {
  const [width, setWidth] = useState(isBrowser() ? window.innerWidth : 0)

  useWindowResize(
    useThrottledFn(event => {
      setWidth(window.innerWidth)
    })
  )

  return width >= 768 ? <DesktopBlogRoll posts={posts} /> : <MobileBlogRoll posts={posts} />
}
