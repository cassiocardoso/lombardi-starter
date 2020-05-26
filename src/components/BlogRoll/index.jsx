import React from 'react'

import { DesktopBlogRoll } from './Desktop'
import { MobileBlogRoll } from './Mobile'

// TODO: Use hooks to handle layout update on page resize
export const BlogRoll = ({ posts }) => {
  return window && window.innerWidth >= 768 ? (
    <DesktopBlogRoll posts={posts} />
  ) : (
    <MobileBlogRoll posts={posts} />
  )
}
