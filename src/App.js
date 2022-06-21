import React, { useState } from 'react'

import ListItem from 'Components/ListItem/ListItem'

import { Container, Form, Input, Button, ListContainer, Tr, Th } from './Styles'

const App = () => {
	const [Tasks, SetTasks] = useState([])

	return (
		<Container>
			<h1>To Do List React</h1>
			<Form>
				<Input type='text' placeholder='Task' />
				<Button type='submit'>Add</Button>
			</Form>
			<ListContainer>
				<Tr>
					<Th>Task</Th>
					<Th>Is Done</Th>
					<Th>Actions</Th>
				</Tr>
				{Object.keys(Tasks).map(id => (
					<ListItem
						key={id}
						text={Tasks[id].text}
						isDone={Tasks[id].isDone}
					/>
				))}
			</ListContainer>
		</Container>
	)
}

export default App
