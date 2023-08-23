import React from 'react'
import { Row, Column, Section, Heading, Text, Img } from '@react-email/components'
import * as GlobalStyles from '../styles'
import { Details } from '../../types'

export default function Header({ receipt }: { receipt: Details['receipt'] }) {
	return (
		<>
			<Row>
				<Column>
					<Img
						src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Left.png`}
						width='252'
						height='156'
						alt=''
					/>
				</Column>
				<Column>
					<Img
						src={`https://stripe-images.s3.amazonaws.com/emails/acct_1M9j6EJCIxbRCULD/3/twelve_degree_icon@2x.png`}
						width='96'
						height='156'
						alt='Deep BlueDot'
					/>
				</Column>
				<Column>
					<Img
						src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Right.png`}
						width='252'
						height='156'
						alt=''
					/>
				</Column>
			</Row>

			<Section>
				<Heading style={title}>Receipt from Deep BlueDot, Inc.</Heading>
				<Text style={subtitle}>Receipt #{receipt}</Text>
			</Section>
		</>
	)
}

const title = {
	color: 'rgb(50, 50, 93)',
	fontSize: 24,
	...GlobalStyles.noMarginAndPadding,
	...GlobalStyles.textCenter,
}

const subtitle = {
	color: 'rgb(136, 152, 170)',
	fontSize: 15,
	margin: '12px 0 0',
	padding: 0,
	lineHeight: '18px',
	...GlobalStyles.textCenter,
}
