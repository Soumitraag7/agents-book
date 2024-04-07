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

const Post = models?.Post || model('Post', postSchema);

export default Post;
