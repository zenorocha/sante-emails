import {
	Heading,
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
	Row,
	Column,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''

export const StripeWelcomeEmail = () => (
	<Html>
		<Head />
		<Preview>You're now ready to make live transactions with Stripe!</Preview>
		<Body style={main}>
			<Container style={container}>
				<Row>
					<Column>
						<Img
							src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Left.png`}
							width='252'
							height='156'
							alt=''
						/>
						{/* <Img src={`${baseUrl}/static/Left.png`} width='252' height='156' alt='' /> */}
					</Column>
					<Column>
						<Img
							src={`https://stripe-images.s3.amazonaws.com/emails/acct_1M9j6EJCIxbRCULD/3/twelve_degree_icon@2x.png`}
							width='96'
							height='156'
							alt='Deep BlueDot'
						/>
						{/* <Img src={`${baseUrl}/static/twelve_degree_icon@2x.png`} width='96' height='156' alt='Deep BlueDot' /> */}
					</Column>
					<Column>
						<Img
							src={`https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Right.png`}
							width='252'
							height='156'
							alt=''
						/>
						{/* <Img src={`${baseUrl}/static/Right.png`} width='252' height='156' alt='' /> */}
					</Column>
				</Row>
				<Section>
					<Heading style={title}>Receipt from Deep BlueDot, Inc.</Heading>
					<Text style={subtitle}>Receipt #1934-6780</Text>
				</Section>

				<Row style={{ padding: '32px 64px' }}>
					<Column>
						<Text style={detailTitle}>Amount paid</Text>
						<Text style={detailContent}>$100.00</Text>
					</Column>
					<Column style={{ margin: '0 20px' }}>
						<Text style={detailTitle}>Date paid</Text>
						<Text style={detailContent}>Mar 24, 2023, 2:30:32 AM</Text>
					</Column>
					<Column>
						<Text style={detailTitle}>Payment method</Text>
						<Row>
							<Img
								data-imagetype='External'
								src='https://stripe-images.s3.amazonaws.com/emails/receipt_assets/card/mastercard-dark@2x.png'
								width='75'
								height='16'
								alt='Mastercard'
								style={{ display: 'inline-block' }}
							/>
							<Text style={{ display: 'inline-block', ...detailContent }}>- 3731</Text>
						</Row>
					</Column>
				</Row>

				<Section style={{ padding: '0 40px' }}>
					<Text style={summaryTitle}>Summary</Text>

					<Section style={{ margin: '24px 0', backgroundColor: '#F6F9FC', borderRadius: 8, padding: '12px 21px' }}>
						<Row>
							<Column>
								<Text style={summaryText}>March re-payment</Text>
							</Column>
							<Column>
								<Text style={{ ...summaryText, ...textRight }}>$100.00</Text>
							</Column>
						</Row>
						<Hr style={{ borderColor: 'rgb(230, 235, 241)', marginTop: 12, marginBottom: 6 }} />
						<Row>
							<Column>
								<Text style={{ ...summaryText, ...fontBold }}>Amount charged</Text>
							</Column>
							<Column>
								<Text style={{ ...summaryText, ...fontBold, ...textRight }}>$100.00</Text>
							</Column>
						</Row>
					</Section>
				</Section>

				<Section style={{ padding: '0 48px' }}>
					<Hr style={{ borderColor: 'rgb(230, 235, 241)', ...noMarginAndPadding }} />

					<Text style={bigText}>
						If you have any questions, contact us at <Link style={bigLink}>hello@deepbluedot.io</Link> or call at{' '}
						<Link style={bigLink}>+1 617-803-7355</Link>.
					</Text>
				</Section>

				<Section style={{ padding: '0 48px 64px' }}>
					<Hr style={{ borderColor: 'rgb(230, 235, 241)', ...noMarginAndPadding }} />

					<Section style={{ padding: '24px 16px' }}>
						<Text style={footerText}>
							Something wrong with the email? <Link style={footerLink}>View it in your browser</Link>.
						</Text>

						<Text style={{ ...footerText, marginTop: 20 }}>
							You're receiving this email because you made a purchase at Deep BlueDot, Inc., which partners with{' '}
							<Link style={footerLink}>Stripe</Link> to provide invoicing and payment processing.
						</Text>
					</Section>
				</Section>
			</Container>
		</Body>
	</Html>
)

export default StripeWelcomeEmail

export const textCenter = {
	textAlign: 'center' as const,
}

export const textRight = {
	textAlign: 'right' as const,
}

export const fontBold = {
	fontWeight: '700',
}

export const noMarginAndPadding = {
	margin: 0,
	padding: 0,
}

const main = {
	backgroundColor: '#F6F9FC',
	fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
	...noMarginAndPadding,
}

const container = {
	backgroundColor: '#ffffff',
	maxWidth: 600,
	width: '100%',
	margin: '84px auto 0',
}

export const title = {
	color: 'rgb(50, 50, 93)',
	fontSize: 24,
	...noMarginAndPadding,
	...textCenter,
}

export const subtitle = {
	color: 'rgb(136, 152, 170)',
	fontSize: 15,
	margin: '12px 0 0',
	padding: 0,
	lineHeight: '18px',
	...textCenter,
}

export const detailTitle = {
	color: '#8898AA',
	fontSize: 12,
	textTransform: 'uppercase',
	lineHeight: '16px',
	...noMarginAndPadding,
	...fontBold,
}

export const detailContent = {
	color: '#525F7F',
	fontSize: 15,
	lineHeight: '24px',
	...noMarginAndPadding,
}

export const summaryTitle = {
	color: '#687385',
	fontSize: 12,
	textTransform: 'uppercase',
	lineHeight: '16px',
	...noMarginAndPadding,
	...fontBold,
}

export const summaryText = {
	color: '#525F7F',
	fontSize: 15,
	width: '100%',
	borderWidth: 0,
	lineHeight: '24px',
	margin: '6px 0',
	padding: 0,
}

export const bigText = {
	color: 'rgb(66,66,66)',
	margin: '32px 0px',
	fontSize: 16,
	lineHeight: '24px',
	padding: 0,
}

export const bigLink = {
	color: 'rgb(0, 0, 238)',
	...noMarginAndPadding,
	...fontBold,
}

export const footerText = {
	color: 'rgb(136, 152, 170)',
	fontSize: 12,
	lineHeight: '16px',
	...noMarginAndPadding,
}

export const footerLink = {
	color: 'rgb(85, 108, 214)',
	...noMarginAndPadding,
}
