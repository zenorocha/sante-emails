import React from 'react'
import { Row, Column, Text } from '@react-email/components'
import * as GlobalStyles from '../styles'

export default function Total({ total }: { total: number }) {
	return (
		<Row>
			<Column>
				<Text style={text}>Total:</Text>
			</Column>
			<Column>
				<Text style={{ ...text, ...GlobalStyles.textRight }}>${total}</Text>
			</Column>
		</Row>
	)
}

const text = {
	color: '#525F7F',
	fontSize: 15,
	width: '100%',
	borderWidth: 0,
	lineHeight: '24px',
	margin: '6px 0',
	padding: 0,
	...GlobalStyles.fontBold,
}
