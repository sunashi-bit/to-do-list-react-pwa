import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: start;
	flex-direction: column;
	gap: 50px;
	padding: 20px;
	box-sizing: border-box;
	margin: 0 auto;
	width: fit-content;
`

export const Form = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	gap: 10px;
`

export const Input = styled.input`
	width: 200px;
	height: 30px;
	padding: 5px;
	margin: 10px;
`

export const Button = styled.button`
	background-color: red;
	color: white;
	border: none;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
	border-radius: 15px;
`

export const ListContainer = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
`

export const Tr = styled.tr`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
`

export const Th = styled.th`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
`
