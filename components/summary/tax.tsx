import type { Summary } from '../../types'
import React from 'react'
import { Row, Column, Text } from '@react-email/components'
import * as s from './styles'

export default function Tax({ tax }: { tax: Summary['tax'] }) {
	return (
		<Row>
			<Column>
				<Text style={{ ...s.title, color: '#525F7F' }}>Tax</Text>
			</Column>
			<Column>
				<Text style={{ ...s.title, ...s.textRight, color: '#d20000' }}>+ ${tax}</Text>
			</Column>
		</Row>
	)
}
