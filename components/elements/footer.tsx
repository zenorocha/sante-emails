import React from 'react'
import { Section, Text, Link, Hr } from '@react-email/components'
import * as GlobalStyles from '../styles'

export default function Footer() {
	return (
		<Section style={{ padding: '0 48px 64px' }}>
			<Hr style={{ ...GlobalStyles.borderColor, ...GlobalStyles.noMarginAndPadding }} />

			<Section style={{ padding: '24px 16px' }}>
				<Text style={text}>
					Something wrong with the email? <Link style={link}>View it in your browser</Link>.
				</Text>

				<Text style={{ ...text, marginTop: 20 }}>
					You're receiving this email because you made a purchase at Santé, Inc., which partners with{' '}
					<Link style={link}>Stripe</Link> to provide invoicing and payment processing.
				</Text>
			</Section>
		</Section>
	)
}

const text = {
	color: 'rgb(136, 152, 170)',
	fontSize: 12,
	lineHeight: '16px',
	...GlobalStyles.noMarginAndPadding,
}

const link = {
	color: 'rgb(85, 108, 214)',
	...GlobalStyles.noMarginAndPadding,
}
