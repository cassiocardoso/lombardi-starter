import React, { Fragment } from 'react'

import { DesktopBlogRoll } from './Desktop'
import { MobileBlogRoll } from './Mobile'

export const BlogRoll = ({ posts }) => {
  return window.innerWidth >= 768 ? (
    <DesktopBlogRoll posts={posts} />
  ) : (
    <MobileBlogRoll posts={posts} />
  )
}
