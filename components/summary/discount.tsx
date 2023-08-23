import React from 'react'
import { Row, Column, Text } from '@react-email/components'
import * as GlobalStyles from '../styles'
import * as T from '../../types'

export default function Discount({ discount }: { discount: T.Summary['discount'] }) {
	return (
		<Row>
			<Column>
				<Text style={text}>Discont</Text>
			</Column>
			<Column>
				<Text style={{ ...text, ...GlobalStyles.textRight, color: 'green' }}>- ${discount}</Text>
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
	...GlobalStyles.noMarginAndPadding,
}
