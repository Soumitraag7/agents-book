'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilePenLine, Trash2 } from 'lucide-react';
import { POSTS } from '@/app/dashboard/my-posts/page';
import Link from 'next/link';
import { format } from 'date-fns';
import { deletePost } from '@/lib/actions/post.action';

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import EditPostForm from '@/app/dashboard/_components/edit-post-form';

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
							{/* EDIT POST */}
							<Dialog>
								<DialogTrigger asChild>
									<Button size="sm">
										<div className="flex items-center justify-center gap-1 5">
											<FilePenLine className="h-4 w-4 text-black" />
											<span>Edit</span>
										</div>
									</Button>
								</DialogTrigger>

								<DialogContent className="sm:max-w-[750px]">
									<DialogHeader>
										<DialogTitle>Edit Post</DialogTitle>
									</DialogHeader>

									<EditPostForm post={post} />

									{/* <DialogFooter>
										<Button type="submit">Save changes</Button>
									</DialogFooter> */}
								</DialogContent>
							</Dialog>

							{/* <Button
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
							</Button> */}

							{/* DELETE POST */}
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										size="sm"
										variant="destructive"
										className="w-full cursor-pointer"
									>
										<div className="flex items-center justify-center gap-1.5">
											<Trash2 className="h-4 w-4 text-white" />{' '}
											<span>Delete</span>
										</div>
									</Button>
								</AlertDialogTrigger>

								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>

										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete
											your post and remove your data from our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>

									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>

										<AlertDialogAction onClick={() => deletePost(post._id)}>
											Continue
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
