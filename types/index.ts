type Props = {
	details: Details
	summary: Summary
	address: {
		shipping: Address
		billing: Address
	}
}

type Details = {
	receipt: string
	amountPaid: string
	datePaid: string
	paymentMethod: {
		type: string
		last4: string
	}
}

type Summary = {
	items: Item[]
	discount?: number
	tax?: number
	shipping?: number
	total: number
}

type Item = {
	name: string
	description: string
	quantity: number
	price: number
	discount?: number
	total?: number
}

type Address = {
	name: string
	address: string
	city: string
	state: string
	zip: string
	country: string
}

export { Details, Summary, Item, Address }

export default Props
