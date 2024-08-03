'use server';

import { revalidatePath } from 'next/cache';

import User from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { handleError, thirtyDaysFromNow } from '@/lib/utils';
import { UserRolesEnum } from '@/constants';

export async function isAdmin(clerkId: string | null) {
	try {
		await connectToDatabase();

		const user = await User.findOne({ clerkId });

		if (!user) throw new Error('User not found');

		return user.role === UserRolesEnum.ADMIN;
	} catch (error) {
		handleError(error);
	}
}

export async function getAllUsers() {
	try {
		await connectToDatabase();

		const users = await User.find();

		if (!users) throw new Error('Users not found');

		return JSON.parse(JSON.stringify(users));
	} catch (error) {
		handleError(error);
	}
}

export async function updateUserSub(userId: string, isSubscribed: boolean) {
	try {
		await connectToDatabase();

		console.log(`in updateUserSub :: `, userId, isSubscribed);

		const user = await User.find({ _id: userId });

		if (!user) throw new Error('User not found');

		const updatedUser = await User.findOneAndUpdate(
			{ _id: userId },
			{
				role: isSubscribed ? UserRolesEnum.SUBSCRIBER : UserRolesEnum.USER,
				isSubscribed: isSubscribed,
				subStartDate: isSubscribed ? new Date() : null,
				subEndDate: isSubscribed ? thirtyDaysFromNow() : null
			},
			{
				new: true
			}
		);

		revalidatePath('/admin/users');
		return JSON.parse(JSON.stringify(updatedUser));
	} catch (error) {
		handleError(error);
	}
}
