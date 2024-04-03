import { AvailableUserRoles, UserRolesEnum } from '@/constants';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
	clerkId: {
		type: String,
		required: true,
		unique: true
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
	}
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
});

const User = models?.User || model('User', UserSchema);

export default User;
