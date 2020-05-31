import React from 'react'

export const ExternalLink = ({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
}) => (
  <a href={href} target={target} rel={rel}>
    {children}
  </a>
)
