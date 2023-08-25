import { Body, Container, Head, Html, Preview } from '@react-email/components'
import * as React from 'react'
import Props from '../types'
import Details, { Summary, Address } from '../constants'
import * as C from '../components'

const StripeWelcomeEmail = ({
	details = Details,
	summary = Summary,
	address = {
		billing: Address,
		shipping: Address,
	},
}: Props) => (
	<Html>
		<Head />
		<Preview>You're now ready to make live transactions with Stripe!</Preview>
		<Body style={main}>
			<Container style={container}>
				<C.Elements.Header receipt={details.receipt} />

				<C.Elements.Details details={details} />

				<C.Summary summary={summary} address={address} />

				<C.Elements.Contact />

				<C.Elements.Footer />
			</Container>
		</Body>
	</Html>
)

export default StripeWelcomeEmail

const main = {
	backgroundColor: '#0f383c',
	fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
	...C.GlobalStyles.noMarginAndPadding,
}

const container = {
	backgroundColor: '#fffef3',
	maxWidth: 600,
	width: '100%',
	margin: '84px auto 0',
}
