import { Schema, model, models } from 'mongoose';

// Define post schema
const postSchema = new Schema(
	{
		from: {
			type: String,
			required: true,
			trim: true,
			index: true
		},
		to: {
			type: String,
			required: true,
			trim: true,
			index: true
		},
		departureTime: {
			type: String,
			required: true
		},
		arivalTime: {
			type: String,
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
		totalTicket: {
			type: Number,
			required: true,
			trim: true
		},
		pricePerTicket: {
			type: Number,
			required: true,
			trim: true
		},
		airlineName: {
			type: String,
			required: true,
			trim: true,
			index: true
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

const Post = models?.Post || model('Post', postSchema);

export default Post;
