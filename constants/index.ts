const Details = {
	receipt: '1934-6780',
	amountPaid: '$100.00',
	datePaid: 'Mar 24, 2023, 2:30:32 AM',
	paymentMethod: {
		type: 'Mastercard',
		last4: '3731',
	},
}

const Summary = {
	discount: 30,
	tax: 10,
	shipping: 20,
	total: 300,
	items: [
		{
			name: 'Product 1',
			description: 'A product for testing',
			quantity: 1,
			price: 100,
			discount: 10,
			total: 100,
		},
		{
			name: 'Product 1',
			description: 'A product for testing',
			quantity: 1,
			price: 100,
			discount: 20,
			total: 100,
		},
		{
			name: 'Product 1',
			description: 'A product for testing',
			quantity: 1,
			price: 100,
			discount: 0,
			total: 100,
		},
	],
}

const Address = {
	name: 'John Doe',
	address: '1234 Main St',
	city: 'San Francisco',
	state: 'CA',
	zip: '94123',
	country: 'US',
}

export { Summary, Address }

export default Details
