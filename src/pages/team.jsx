import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet'

import Layout from '../layout'
import { Banner } from '../components/Banner'
import { ContentContainer } from '../components/ContentContainer'
import { TeamTable } from '../components/TeamTable'

const TeamPage = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark
	const { coaches, players } = frontmatter

	return (
		<Layout>
			<Banner title={data.markdownRemark.frontmatter.title} />
			<ContentContainer>
				<Heading level="2">Jogadores</Heading>
				<TeamTable data={players} type="players" />
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
				players {
					number
					name
					position
				}
				coaches {
					type
					name
				}
			}
		}
	}
`
