import React from 'react'
import { Section, Text, Hr } from '@react-email/components'
import * as GlobalStyles from '../styles'
import Address from '../address'
import Props, * as T from '../../types'

import Tax from './tax'
import Shipping from './shipping'
import Item from './item'
import Discount from './discount'
import Total from './total'

export { Tax, Shipping, Item, Discount, Total }

export default function Summary({ summary, address }: { summary: T.Summary; address: Props['address'] }) {
	return (
		<Section style={container}>
			<Text style={title}>Summary</Text>

			<Section style={list}>
				{summary.items.map((item, index) => (
					<Item key={index} item={item} />
				))}

				<Hr style={border} />

				{summary.discount ? <Discount discount={summary.discount} /> : null}
				{summary.shipping ? <Shipping shipping={summary.shipping} /> : null}
				{summary.tax ? <Tax tax={summary.tax} /> : null}

				<Total total={summary.total} />

				<Hr style={border} />

				<Text style={itemName}>Shipping:</Text>
				<Address address={address} />
			</Section>
		</Section>
	)
}

const container = {
	padding: '0 40px',
}

const border = {
	...GlobalStyles.borderColor,
	marginTop: 12,
	marginBottom: 6,
}

const list = {
	margin: '24px 0',
	backgroundColor: '#F6F9FC',
	borderRadius: 8,
	padding: '12px 21px',
}

const title = {
	color: '#687385',
	fontSize: 12,
	textTransform: 'uppercase' as const,
	lineHeight: '16px',
	...GlobalStyles.noMarginAndPadding,
	...GlobalStyles.fontBold,
}

const itemName = {
	color: '#687385',
	fontSize: 14,
	lineHeight: '16px',
	padding: 0,
	marginTop: 24,
	marginBottom: 4,
	...GlobalStyles.fontBold,
}
