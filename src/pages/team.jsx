import React from 'react'
import { graphql } from 'gatsby'
import { Heading } from 'grommet'

import Layout from '../layout'
import { Banner } from '../components/Banner'
import { ContentContainer } from '../components/ContentContainer'
import { TeamTable } from '../components/TeamTable'

const TeamPage = ({ data }) => {
	const { coaches, title } = data.markdownRemark.frontmatter

	return (
		<Layout>
			<Banner title={title} />
			<ContentContainer>
				{/* <Heading level="2">Jogadores</Heading>
				<TeamTable data={players} type="players" /> */}
				<Heading level="2" margin={{ top: 'xlarge' }}>Commisão Técnica</Heading>
				<TeamTable data={coaches} type="coaches" />
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
				coaches {
					type
					name
				}
			}
		}
	}
`
