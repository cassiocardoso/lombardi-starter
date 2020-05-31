import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { HeroWrapper, HeroTitle } from './Hero.styles'

/**
 * Hero can receive the customized props to change the banner or title
 * or fallback to the default values set using the CMS.
 */
export const Hero = ({ showHero, image, title, showTitle }) => {
  const {
    markdownRemark: {
      frontmatter,
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { regex: "/hero/" } }) {
        frontmatter {
          showHero
          image
          title
          showTitle
        }
      }
    }
  `)

  return (
    (showHero || frontmatter.showHero) && (
      <HeroWrapper image={image || frontmatter.image}>{(showTitle || frontmatter.showTitle) && <HeroTitle>{title || frontmatter.title}</HeroTitle>}</HeroWrapper>
    )
  )
}
