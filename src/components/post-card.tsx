import Link from 'next/link';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { POSTS } from '@/app/dashboard/my-posts/page';

type Props = {
	posts: POSTS[];
};

export default function PostCard({ posts }: Props) {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			{posts.map(post => (
				<Card key={post._id}>
					<CardContent className="mt-5">
						<div className="flex flex-col items-center justify-between">
							<h3 className="text-lg line-clamp-2 font-bold">
								{post.airlineName}
							</h3>
							<p>{format(post.departureDate, 'LLL dd, y')}</p>
						</div>

						{/* <div className="flex items-center justify-between py-2 mt-2">
							<Avatar className="w-7 h-7">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>

							<Button size="sm" variant="default">
								Follow
							</Button>
						</div> */}

						<div className="flex items-center justify-between gap-4">
							<p className="line-clamp-2 text-base mt-2 text-gray-600 dark:text-gray-300">
								{post.from}
							</p>

							<p className="line-clamp-2 text-base mt-2 text-gray-600 dark:text-gray-300">
								{post.to}
							</p>
						</div>

						<div className="flex items-center justify-between">
							<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
								Ticket&apos;s:{' '}
								<span className="text-gray-500">{post.totalTicket}</span>
							</p>
							<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
								Price:{' '}
								<span className="text-gray-500">Tk {post.pricePerTicket}</span>
							</p>
						</div>

						<Button asChild className="w-full mt-7">
							<Link href={`/dashboard/post/${post._id}`}>Read More</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
