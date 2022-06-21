import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import ListItem from 'Components/ListItem/ListItem'

import { Container, Form, Input, Button, ListContainer, Tr, Th } from './Styles'

const App = () => {
	const [Tasks, SetTasks] = useState({})
	const [Text, SetText] = useState('')

	const AddTask = event => {
		event.preventDefault()

		const id = uuid()

		SetTasks(tasks => ({
			...tasks,
			[id]: { text: Text, isDone: false },
		}))

		SetText('')
	}

	const OnChangeText = event => {
		SetText(event.target.value)
	}

	const OnChangeIsDone = id => {
		SetTasks(tasks => ({
			...tasks,
			[id]: { ...tasks[id], isDone: !tasks[id].isDone },
		}))
	}

	return (
		<Container>
			<h1>To Do List React</h1>
			<Form onSubmit={AddTask}>
				<Input
					type='text'
					placeholder='Task'
					value={Text}
					onChange={OnChangeText}
				/>
				<Button type='submit'>Add</Button>
			</Form>
			<ListContainer>
				<thead>
					<Tr>
						<Th>Task</Th>
						<Th>Is Done</Th>
						<Th>Actions</Th>
					</Tr>
				</thead>
				<tbody>
					{Object.keys(Tasks).map(id => (
						<ListItem
							key={id}
							id={id}
							text={Tasks[id].text}
							isDone={Tasks[id].isDone}
							onChangeIsDone={OnChangeIsDone}
						/>
					))}
				</tbody>
			</ListContainer>
		</Container>
	)
}

export default App
