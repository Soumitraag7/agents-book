import { getAllUsers } from '@/lib/actions/admin.action';

import PageTitle from '@/app/dashboard/_components/page-title';

import { format, formatDistanceToNow } from 'date-fns';

import { Button } from '@/components/ui/button';

import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import UserStatusBtn from '@/app/admin/_components/user-status-btn';

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
	createdAt: Date;
}

export default async function UserPage() {
	const users: USER[] = await getAllUsers();

	// console.log(`users :: `, users);
	console.log(
		`users.is :: `,
		users.map(user => typeof user.isSubscribed)
	);

	return (
		<Card className="border-none">
			<CardHeader className="px-7">
				<CardTitle>{/* <PageTitle title="Users" /> */}</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Customer</TableHead>
							<TableHead className="hidden sm:table-cell">Role</TableHead>
							<TableHead className="hidden sm:table-cell">Status</TableHead>
							<TableHead className="hidden md:table-cell">
								Sub Start Date
							</TableHead>
							<TableHead className="hidden md:table-cell">
								Sub End Date
							</TableHead>
							<TableHead className="text-right">Change Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map(user => (
							<TableRow key={user._id}>
								<TableCell>
									<div className="font-medium">
										{user.firstName} {user.lastName}
									</div>
									<div className="hidden text-sm text-muted-foreground md:inline">
										{user.email}
									</div>
								</TableCell>

								<TableCell className="hidden sm:table-cell">
									<span className="">{user.role}</span>
								</TableCell>

								<TableCell className="hidden sm:table-cell">
									<Badge
										className={`text-xs ${
											user.isSubscribed ? 'text-green-500' : 'text-red-500'
										}`}
										variant="outline"
									>
										{user.isSubscribed ? 'Subscribed' : 'Not Subscribed'}
									</Badge>
								</TableCell>

								<TableCell className="hidden md:table-cell">
									{user.subStartDate
										? format(user.subStartDate, 'yyyy-MM-dd')
										: '-'}
								</TableCell>

								<TableCell className="hidden md:table-cell">
									{user.subStartDate
										? format(user.subEndDate!, 'yyyy-MM-dd')
										: '-'}
								</TableCell>

								<TableCell className="text-center">
									<UserStatusBtn isSubscribed={user.isSubscribed} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
