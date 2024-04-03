import { Schema, model, models } from 'mongoose';

const ProfileSchema = new Schema({
	agencyName: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
});

const Profile = models?.Profile || model('Profile', ProfileSchema);

export default Profile;
