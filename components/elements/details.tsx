import React from 'react'
import { Row, Column, Text, Img } from '@react-email/components'
import * as GlobalStyles from '../styles'
import * as T from '../../types'

export default function Details({ details }: { details: T.Details }) {
	return (
		<Row style={{ padding: '32px 64px' }}>
			<Column>
				<Text style={detailTitle}>Amount paid</Text>
				<Text style={detailContent}>{details.amountPaid}</Text>
			</Column>

			<Column style={{ margin: '0 20px' }}>
				<Text style={detailTitle}>Date paid</Text>
				<Text style={detailContent}>{details.datePaid}</Text>
			</Column>

			<Column>
				<Text style={detailTitle}>Payment method</Text>
				<Row>
					{details.paymentMethod.type === 'Mastercard' ? (
						<Img
							data-imagetype='External'
							src='https://stripe-images.s3.amazonaws.com/emails/receipt_assets/card/mastercard-dark@2x.png'
							width='75'
							height='16'
							alt='Mastercard'
							style={{ display: 'inline-block' }}
						/>
					) : null}
					<Text style={{ display: 'inline-block', ...detailContent }}>- {details.paymentMethod.last4}</Text>
				</Row>
			</Column>
		</Row>
	)
}

const detailTitle = {
	color: '#a3a3a3',
	fontSize: 12,
	textTransform: 'uppercase' as const,
	lineHeight: '16px',
	...GlobalStyles.noMarginAndPadding,
	...GlobalStyles.fontBold,
}

const detailContent = {
	color: '#333331',
	fontSize: 15,
	lineHeight: '24px',
	...GlobalStyles.noMarginAndPadding,
}
