import React from 'react'
import { Column, Text, Row } from '@react-email/components'
import type { Summary } from '../../types'
import * as s from './styles'

export default function Shipping({ shipping }: { shipping: Summary['shipping'] }) {
	return (
		<Row>
			<Column>
				<Text style={{ ...s.title }}>Shipping</Text>
			</Column>
			<Column>
				<Text style={{ ...s.title, ...s.textRight }}>${shipping}</Text>
			</Column>
		</Row>
	)
}
