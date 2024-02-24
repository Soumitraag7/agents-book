import { Schema, model } from 'mongoose';

// Define product schema
const productSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: String,
		price: {
			type: Number,
			required: true
		},
		totalItems: {
			type: Number,
			required: true
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{ timestamps: true }
);

// Create Product model
const Product = model('Product', productSchema);

module.exports = Product;
