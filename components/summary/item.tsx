import React from 'react'
import { Text, Row, Column, Section } from '@react-email/components'
import * as T from '../../types'
import * as GlobalStyles from '../styles'

export default function Item({ item }: { item: T.Item }) {
	return (
		<Row style={{ marginBottom: 8 }}>
			<Column>
				<Text style={{ ...itemName, display: 'inline-block', color: '#010101' }}>{item.name}</Text>
				<Text style={itemDescription}>{item.description}</Text>
			</Column>
			<Column>
				<Section style={GlobalStyles.textRight}>
					<Text style={{ ...text, color: '#525F7F' }}>$ {item.price}</Text>
					{item.discount ? <Text style={{ ...text, color: 'green' }}>- $ {item.discount}</Text> : null}
				</Section>
				<Text style={{ ...itemDescription, ...GlobalStyles.textRight, color: '#000' }}>x{item.quantity}</Text>
			</Column>
		</Row>
	)
}

const text = {
	fontSize: 15,
	borderWidth: 0,
	lineHeight: '24px',
	display: 'inline-block',
	width: 'auto',
	...GlobalStyles.noMarginAndPadding,
}

const itemName = {
	color: '#687385',
	fontSize: 14,
	lineHeight: '16px',
	fontWeight: 'bold' as const,
	...GlobalStyles.noMarginAndPadding,
}

const itemDescription = {
	color: '#525F7F',
	fontSize: 12,
	lineHeight: '16px',
	...GlobalStyles.noMarginAndPadding,
}
