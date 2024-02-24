import { Schema, model } from 'mongoose';

// Define user schema
const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		clerkID: {
			type: String,
			required: true
		},
		notificationSubID: [
			{
				type: Schema.Types.ObjectId,
				ref: 'NotificationSubscription'
			}
		],
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Product'
			}
		],
		role: {
			type: String,
			enum: ['user', 'admin', 'super-admin'],
			default: 'user'
		},
		subscriptionStatus: {
			type: Boolean,
			default: false
		},
		subscriptionStartDate: {
			type: Date
		}
	},
	{ timestamps: true }
);

// Middleware to update subscriptionDate when subscription is set to true
userSchema.pre('save', function (next) {
	if (this.subscriptionStatus && !this.subscriptionStartDate) {
		this.subscriptionStartDate = new Date();
	}
	next();
});

// Create User model
const User = model('User', userSchema);

module.exports = User;
