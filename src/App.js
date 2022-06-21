import React, { useEffect, useState } from 'react'

import { v4 as uuid } from 'uuid'

import ListItem from 'Components/ListItem/ListItem'

import { Container, Form, Input, Button, ListContainer, Tr, Th } from './Styles'

const App = () => {
	const [Tasks, SetTasks] = useState({})
	const [Text, SetText] = useState('')

	const AddTask = event => {
		event.preventDefault()

		const id = uuid()

		SetTasks(tasks => {
			const newTasks = {
				...tasks,
				[id]: { text: Text, isDone: false },
			}

			localStorage.setItem('tasks', JSON.stringify(newTasks))

			return newTasks
		})

		SetText('')
	}

	const OnChangeText = event => {
		SetText(event.target.value)
	}

	const OnChangeIsDone = id => {
		SetTasks(tasks => {
			const newTasks = {
				...tasks,
				[id]: { ...tasks[id], isDone: !tasks[id].isDone },
			}

			localStorage.setItem('tasks', JSON.stringify(newTasks))

			return newTasks
		})
	}

	const OnRemoveTask = id => {
		SetTasks(tasks => {
			// eslint-disable-next-line no-unused-vars
			const { [id]: _, ...newTasks } = tasks

			localStorage.setItem('tasks', JSON.stringify(newTasks))

			return newTasks
		})
	}

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))

		SetTasks(tasks || {})
	}, [])

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
							onRemoveTask={OnRemoveTask}
						/>
					))}
				</tbody>
			</ListContainer>
		</Container>
	)
}

export default App
