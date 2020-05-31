import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { HeroWrapper, HeroTitle } from './Hero.styles'

export const Hero = () => {
  const {
    markdownRemark: {
      frontmatter: { showHero, image, title, showTitle },
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
    showHero && (
      <HeroWrapper image={image}>{showTitle && <HeroTitle>{title}</HeroTitle>}</HeroWrapper>
    )
  )
}
