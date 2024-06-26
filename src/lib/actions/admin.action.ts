'use server';

import { revalidatePath } from 'next/cache';

import User from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { handleError } from '@/lib/utils';

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

export async function updateUserSub() {
	try {
		await connectToDatabase();

		const user = await User.find();

		if (!user) throw new Error('User not found');

		// console.log('DELETE POST :: ', user);

		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		handleError(error);
	}
}
