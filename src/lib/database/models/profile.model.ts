import { Schema, model, models } from 'mongoose';

const ProfileSchema = new Schema(
	{
		agencyName: {
			type: String,
			trim: true,
			required: true
		},
		address: {
			type: String,
			trim: true,
			required: true
		},
		phoneNumber: {
			type: Number,
			trim: true,
			required: true
		},
		followee: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

const Profile = models?.Profile || model('Profile', ProfileSchema);

export default Profile;
