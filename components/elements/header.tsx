import React from 'react'
import { Row, Column, Section, Heading, Text, Img } from '@react-email/components'
import * as GlobalStyles from '../styles'
import { Details } from '../../types'

export default function Header({ receipt }: { receipt: Details['receipt'] }) {
	return (
		<>
			<Row>
				<Column>
					{/* <Img
						src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Left.png`}
						width='252'
						height='156'
						alt=''
					/> */}
				</Column>
				<Column>
					<Img
						src={`https://uploads-ssl.webflow.com/64aac3759d5b566a4d052393/64aac6ee88164330c419a58d_logo1.png`}
						width='100'
						height='27'
						alt='sante logo'
						style={{
							marginTop: 80,
							marginBottom: 48,
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
				</Column>
				<Column>
					{/* <Img
						src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Right.png`}
						width='252'
						height='156'
						alt=''
					/> */}
				</Column>
			</Row>

			<Section>
				<Heading style={title}>Receipt from Santé, Inc.</Heading>
				<Text style={subtitle}>Receipt #{receipt}</Text>
			</Section>
		</>
	)
}

const title = {
	color: '#0f383c',
	fontSize: 24,
	...GlobalStyles.noMarginAndPadding,
	...GlobalStyles.textCenter,
}

const subtitle = {
	color: '#a3a3a3',
	fontSize: 15,
	margin: '12px 0 0',
	padding: 0,
	lineHeight: '18px',
	...GlobalStyles.textCenter,
}
