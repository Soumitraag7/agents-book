import { Schema, model, models } from 'mongoose';

// Define product schema
const productSchema = new Schema(
	{
		from: {
			type: String,
			required: true
		},
		to: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true
		},
		departureTime: {
			type: Number,
			required: true
		},
		arivalTime: {
			type: Number,
			required: true
		},
		departureDate: {
			type: Date,
			required: true
		},
		arivalDate: {
			type: Date,
			required: true
		},
		seatType: {
			type: String,
			required: true
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

const Product = models?.Product || model('Product', productSchema);

export default Product;
