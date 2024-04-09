import { Schema, model, models } from 'mongoose';

// Define post schema
const postSchema = new Schema(
	{
		from: {
			type: String,
			required: true
		},
		to: {
			type: String,
			required: true
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
			type: String,
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

const Post = models?.Post || model('Post', postSchema);

export default Post;
