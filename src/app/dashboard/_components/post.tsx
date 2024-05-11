'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilePenLine, Trash2 } from 'lucide-react';
import { POSTS } from '@/app/dashboard/my-posts/page';
import Link from 'next/link';
import { format } from 'date-fns';
import { deletePost } from '@/lib/actions/post.action';

type Props = {
	posts: POSTS[];
};

export default function Post({ posts }: Props) {
	return (
		<div className=" grid gap-5">
			{posts.map(post => (
				<Card key={post._id}>
					<CardContent className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-between w-full gap-3 text-sm">
							<h2>{post.airlineName}</h2>

							<div className="flex flex-col items-end">
								<h2>{post.departureTime}</h2>
								<h2>{post.from}</h2>
								<h2>{format(post.departureDate, 'LLL dd, y')}</h2>
							</div>

							<div className="flex flex-col items-end">
								<h2>{post.arivalTime}</h2>
								<h2>{post.to}</h2>
								<h2>{format(post.arivalDate, 'LLL dd, y')}</h2>
							</div>

							<div className="flex flex-col items-end">
								<h2>Tk {post.pricePerTicket} /Ticket</h2>
								<h2>Total Ticket: {post.totalTicket}</h2>
								<h2>
									<span className="capitalize">{post.seatType}</span>
								</h2>
							</div>
						</div>

						<div className="flex items-center justify-center gap-3 ml-3">
							<Button asChild size="sm" className="w-full cursor-pointer">
								<div className="gap-1.5">
									<FilePenLine className="h-4 w-4 text-black" />
									<span>Edit</span>
								</div>
							</Button>

							<Button
								asChild
								size="sm"
								variant="destructive"
								className="w-full cursor-pointer"
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
