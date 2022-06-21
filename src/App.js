import React from 'react'

import ListItem from 'Components/ListItem/ListItem'

import { Container, Form, Input, Button, ListContainer, Tr, Th } from './Styles'

const App = () => {
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
				<ListItem text='Task1' isDone={true} />
				<ListItem text='Task2' isDone={false} />
			</ListContainer>
		</Container>
	)
}

export default App
