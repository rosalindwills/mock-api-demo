export default {
	type: 'object',
	properties: {
		"account": {
			type: 'object',
			properties: {
				userId: {
					type: 'string',
					faker: 'random.uuid'
				},
				firstName: {
					type: 'string',
					faker: 'name.firstName'
				},
				lastName: {
					type: 'string',
					faker: 'name.lastName'
				},
				email: {
					type: 'string',
					faker: 'internet.email'
				},
				address: {
					type: 'string',
					faker: 'address.streetAddress'
				},
				city: {
					type: 'string',
					faker: 'address.city'
				},
				state: {
					type: 'string',
					faker: 'address.state'
				},
				zip: {
					type: 'string',
					faker: 'address.zipCode'
				}
			},
			required: ['userId', 'firstName', 'lastName', 'email', 'address', 'city', 'state', 'zip']
		},
		"posts": {
			type: 'array',
			minItems: 1,
			maxItems: 15,
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
						unique: true,
						minimum: 1
					},
					title: {
						type: 'string',
						faker: 'lorem.sentence'
					},
					content: {
						type: 'string',
						faker: 'lorem.paragraphs'
					},
					author: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
								faker: 'name.findName'
							},
							alias: {
								type: 'string',
								faker: 'lorem.word'
							},
							website: {
								type: 'string',
								faker: 'internet.url'
							},
						},
						required: ['name', 'alias', 'website']
					},
					isPublished: {
						type: 'boolean',
						faker: 'random.boolean'
					},
					datePublished: {
						type: 'Date',
						faker: 'date.past'
					},
					slug: {
						type: 'string',
						faker: 'lorem.slug'
					},
					audienceResponse: {
						type: 'string',
						enum: ['positive', 'negative', 'neutral']
					}
				},
				required: ['id', 'title', 'content', 'author', 'isPublished', 'datePublished']
			}
		}
	},
	required: ['posts', 'account']
};
