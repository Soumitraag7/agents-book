import { UserButton, useUser } from '@clerk/nextjs';
import React from 'react';

export default function UserItem() {
	const { isLoaded, user } = useUser();
	return (
		<div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
			<div className=" rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
				<UserButton />
			</div>

			<div className="grow">
				<p className="text-[16px] font-bold">
					{isLoaded ? `${user?.firstName} ${user?.lastName}` : ''}
				</p>
				<p className="text-[12px] text-neutral-500 truncate">
					{user?.emailAddresses[0].emailAddress}
				</p>
			</div>
		</div>
	);
}
