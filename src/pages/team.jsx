import React from 'react'
import { graphql } from 'gatsby'
import { Heading } from 'grommet'

import Layout from '../layout'
import { Banner } from '../components/Banner'
import { ContentContainer } from '../components/ContentContainer'

const TeamPage = ({ data }) => {
	console.log('team page >>>', data)

	return (
		<Layout>
			<Banner />
			<ContentContainer>
				team page
			</ContentContainer>
		</Layout>
	)
}

export default TeamPage

export const aboutPageQuery = graphql`
	query {
		markdownRemark(fields: { slug: { regex: "/team/" }}) {
			id
			fields {
				slug
			}
			frontmatter {
				templateKey
				title
			}
		}
	}
`
