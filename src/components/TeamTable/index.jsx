import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet'

export const TeamTable = ({ data, type }) => {
	if (!type) {
		return null;
	}

	/**
	 * if (type === 'players') {
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableCell border="bottom" scope="col">#</TableCell>
						<TableCell border="bottom" scope="col">Posição</TableCell>
						<TableCell border="bottom" scope="col">Nome</TableCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map(player => (
						<TableRow key={`${player.number}-${player.name}`}>
							<TableCell>{player.number}</TableCell>
							<TableCell>{player.position}</TableCell>
							<TableCell>{player.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	} else
	 */

	if (type === 'coaches') {
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableCell border="bottom" scope="col">Cargo</TableCell>
						<TableCell border="bottom" scope="col">Nome</TableCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map(coach => (
						<TableRow key={`${coach.name}`}>
							<TableCell>{coach.type}</TableCell>
							<TableCell>{coach.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	}

};
