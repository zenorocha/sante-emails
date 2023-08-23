import React from 'react'
import { Section, Text, Link, Hr } from '@react-email/components'
import * as GlobalStyles from '../styles'

export default function Contact() {
	return (
		<Section style={{ padding: '0 48px' }}>
			<Hr style={{ ...GlobalStyles.borderColor, ...GlobalStyles.noMarginAndPadding }} />

			<Text style={text}>
				If you have any questions, contact us at <Link style={link}>hello@deepbluedot.io</Link> or call at{' '}
				<Link style={link}>+1 617-803-7355</Link>.
			</Text>
		</Section>
	)
}

const text = {
	color: 'rgb(66,66,66)',
	margin: '32px 0px',
	fontSize: 16,
	lineHeight: '24px',
	padding: 0,
}

const link = {
	color: 'rgb(0, 0, 238)',
	fontWeight: '700' as const,
	...GlobalStyles.noMarginAndPadding,
}
