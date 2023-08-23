import React from 'react'
import { Row, Column, Text } from '@react-email/components'
import * as GlobalStyles from './styles'
import Props from '../types'

export default function Address({ address }: { address: Props['address'] }) {
	return (
		<Row>
			<Column>
				<Text style={title}>Billing address</Text>
				<Text style={details}>
					{address.billing.address}, {address.billing.city} - {address.billing.state}
				</Text>
				<Text style={details}>
					{address.billing.zip}, {address.billing.country}
				</Text>
			</Column>
			<Column>
				<Text style={title}>Shipping address</Text>
				<Text style={details}>
					{address.shipping.address}, {address.shipping.city} - {address.shipping.state}
				</Text>
				<Text style={details}>
					{address.shipping.zip}, {address.shipping.country}
				</Text>
			</Column>
		</Row>
	)
}

const title = {
	fontSize: 15,
	width: '100%',
	borderWidth: 0,
	lineHeight: '24px',
	...GlobalStyles.noMarginAndPadding,
}

const details = {
	color: '#525F7F',
	fontSize: 12,
	lineHeight: '16px',
	...GlobalStyles.noMarginAndPadding,
}
