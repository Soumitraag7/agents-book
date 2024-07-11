// 'use client';

import { getAllUsers } from '@/lib/actions/admin.action';

import PageTitle from '@/app/dashboard/_components/page-title';

import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';

export interface USER {
	_id: string;
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	photo: string;
	role: string;
	isSubscribed: boolean;
	subStartDate?: Date;
	subEndDate?: Date;
	username: string;
}

export default async function Admin() {
	const users: USER[] = await getAllUsers();

	return (
		<div className="flex flex-col gap-5 w-full">
			<PageTitle title="Admin" />

			{users.map(user => (
				<Card key={user._id} className="flex flex-col gap-2 bg-slate-600">
					<CardContent className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
							<h2>_id: {user._id}</h2>
							<h2>clerkId: {user.clerkId}</h2>
							<h2>firstName: {user.firstName}</h2>
							<h2>lastName: {user.lastName}</h2>
							<h2>email: {user.email}</h2>
							<h2>role: {user.role}</h2>
							<h2>
								isSubscribed:{' '}
								<span
									className={
										user.isSubscribed ? 'text-green-500' : 'text-red-500'
									}
								>
									{user.isSubscribed.toString()}
								</span>
							</h2>
							<h2>
								subStartDate:{' '}
								{typeof user.subStartDate === 'undefined'
									? 'No start date'
									: format(user?.subStartDate, 'LLL dd, y')}
							</h2>
							<h2>
								subEndDate:{' '}
								{typeof user.subEndDate === 'undefined'
									? 'No end date'
									: format(user?.subEndDate, 'LLL dd, y')}
							</h2>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
