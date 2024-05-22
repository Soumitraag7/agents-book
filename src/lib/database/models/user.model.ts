import { AvailableUserRoles, UserRolesEnum } from '@/constants';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
			index: true
		},
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
			required: true,
			unique: true
		},
		photo: {
			type: String,
			required: true
		},
		role: {
			type: String,
			enum: AvailableUserRoles,
			default: UserRolesEnum.USER,
			required: true
		},
		isSubscribed: {
			type: Boolean,
			default: false,
			required: true
		},
		subStartDate: { type: Date },
		subEndDate: { type: Date }
		// username: {
		// 	type: String,
		// 	required: true,
		// 	unique: true
		// },
		// planId: {
		// 	type: Number,
		// 	default: 1
		// },
		// creditBalance: {
		// 	type: Number,
		// 	default: 10
		// }
	},
	{ timestamps: true }
);

const User = models?.User || model('User', UserSchema);

export default User;
