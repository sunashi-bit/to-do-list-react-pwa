import React from 'react'

import { Container, Checkbox, Button } from './Styles'

const ListItem = ({ text, isDone }) => {
	return (
		<Container>
			<Container as='td'>{text}</Container>
			<Container as='td'>
				<Checkbox checked={isDone} />
			</Container>
			<Container as='td'>
				<Button>Remove</Button>
			</Container>
		</Container>
	)
}

export default ListItem
