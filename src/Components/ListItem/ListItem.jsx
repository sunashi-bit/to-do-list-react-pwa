import React from 'react'

import { Container, Checkbox, Button } from './Styles'

const ListItem = ({ text, isDone, onChangeIsDone, id }) => {
	return (
		<Container>
			<Container as='td'>{text}</Container>
			<Container as='td'>
				<Checkbox
					checked={isDone}
					onChange={() => onChangeIsDone(id)}
				/>
			</Container>
			<Container as='td'>
				<Button>Remove</Button>
			</Container>
		</Container>
	)
}

export default ListItem
