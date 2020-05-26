import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { Banner } from '../components/Banner'
import { ContentContainer } from '../components/ContentContainer'

const AboutPage = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark

	return (
		<Layout>
			<Banner title={data.markdownRemark.frontmatter.title} />
			<ContentContainer>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</ContentContainer>
		</Layout>
	)
}

export default AboutPage

export const aboutPageQuery = graphql`
	query {
		markdownRemark(fields: { slug: { regex: "/about/" }}) {
			id
			fields {
				slug
			}
			html
			frontmatter {
				templateKey
				title
			}
		}
	}
`
