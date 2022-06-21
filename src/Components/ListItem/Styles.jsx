import styled from 'styled-components'

export const Container = styled.tr`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
`

export const Checkbox = styled.input`
	width: 20px;
	height: 20px;
	background-color: red;

	&:checked {
		background-color: green;
	}
`

Checkbox.defaultProps = {
	type: 'checkbox',
}

export const Button = styled.button`
	background-color: red;
	color: white;
	border: none;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
	border-radius: 15px;
`
