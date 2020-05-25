import React from 'react'
import { Anchor, Box, Header as GrHeader, Nav } from 'grommet'
import styled from 'styled-components'

const menuLinks = [
	{
		label: 'Início',
		url: '/',
	},
	{
		label: 'Sobre',
		url: '/about',
	},
	{
		label: 'Equipe',
		url: '/team',
	},
	{
		label: 'Blog',
		url: '/blog',
	},
	{
		label: 'Contato',
		url: '/contact',
	},
];

const StyledHeader = styled(GrHeader)`
	margin-top: 30px;
`

export const Header = () => (
	<StyledHeader background="brand" direction="row" height="xxsmall" justify="center">
		<Box width="xlarge">
			<Nav direction="row">
				{menuLinks.map(link => <Anchor href={link.url} key={link.label}>{link.label}</Anchor>)}
			</Nav>
		</Box>
	</StyledHeader>
);
