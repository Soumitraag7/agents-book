import { Schema, model, models } from 'mongoose';

const SubSchema = new Schema(
	{
		isSubscribed: {
			type: Boolean,
			default: false
		},
		subStartDate: {
			type: Date,
			required: true
		},
		subEndDate: {
			type: Date,
			required: true
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

const Sub = models?.Sub || model('Sub', SubSchema);

export default Sub;
