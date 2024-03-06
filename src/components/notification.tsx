'use client';

import * as React from 'react';
import { BellIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export function Notification() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<BellIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Notification</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[300px] h-[500px] overflow-y-scroll "
			>
				<DropdownMenuItem>
					Notification 1 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 2 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 3 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 4 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 4 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 5 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 6 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
				<DropdownMenuItem>
					Notification 7 Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Itaque ab doloremque nihil? Tenetur veniam quia dolor officiis
					porro molestias ipsum!
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
