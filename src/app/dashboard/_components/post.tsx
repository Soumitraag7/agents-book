'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilePenLine, Trash2 } from 'lucide-react';
import { POSTS } from '@/app/dashboard/my-posts/page';
import Link from 'next/link';
import { format } from 'date-fns';
import { deletePost } from '@/lib/actions/post.action';

export const DEMO_CARD_INFO = [
	{
		from: 'LAX',
		to: 'YYX',
		arivalTime: '20:30',
		departureTime: '12:30',
		arivalDate: '12-11-2022',
		departureDate: '02-12-2023',
		totalTicket: 0,
		airlineName: 'Etihad Airways',
		pricePerTicket: 0,
		seatType: 'First'
	},
	{
		from: 'LAX',
		to: 'YYX',
		arivalTime: '20:30',
		departureTime: '12:30',
		arivalDate: '12-11-2022',
		departureDate: '02-12-2023',
		totalTicket: 0,
		airlineName: 'Etihad Airways',
		pricePerTicket: 0,
		seatType: 'First'
	},
	{
		from: 'YYX',
		to: 'LAX',
		arivalTime: '20:30',
		departureTime: '12:30',
		arivalDate: '12-11-2022',
		departureDate: '02-12-2023',
		totalTicket: 0,
		airlineName: 'Etihad Airways',
		pricePerTicket: 0,
		seatType: 'First'
	}
];

type Props = {
	posts: POSTS[];
};

export default function Post({ posts }: Props) {
	return (
		<div className=" grid  gap-5">
			{posts.map(post => (
				<Card key={post._id}>
					<CardContent className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
							<h2>From: {post.from}</h2>
							<h2>To: {post.to}</h2>
							<h2>DepartureTime: {post.departureTime}</h2>
							<h2>Arival Time: {post.arivalTime}</h2>
							<h2>Departure Date: {format(post.departureDate, 'LLL dd, y')}</h2>
							<h2>Arival Date: {format(post.arivalDate, 'LLL dd, y')}</h2>
							<h2>Airline Name: {post.airlineName}</h2>
							<h2>Total Ticket: {post.totalTicket}</h2>
							<h2>Price Per Ticket: {post.pricePerTicket}</h2>
							<h2>Seat Type: {post.seatType}</h2>
						</div>

						<div className="flex items-center justify-center gap-3 ">
							<Button asChild size="sm" className="w-full mt-7">
								<div className="gap-1.5">
									<FilePenLine className="h-4 w-4 text-black" />
									<span>Edit</span>
								</div>
							</Button>

							<Button
								asChild
								size="sm"
								variant="destructive"
								className="w-full mt-7"
								onClick={() => {
									deletePost(post._id);
								}}
							>
								<div className="gap-1.5">
									<Trash2 className="h-4 w-4 text-white" /> <span>Delete</span>
								</div>
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
