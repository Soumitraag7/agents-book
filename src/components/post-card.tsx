import Image from 'next/image';
import Link from 'next/link';
import { DEMO_CARD_INFO } from '@/constants';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import DemoImg from '../../public/images/demo-img.jpg';
import { POSTS } from '@/app/dashboard/my-posts/page';

type Props = {
	posts: POSTS[];
};

export default function PostCard({ posts }: Props) {
	console.log('D length:: ', posts.length);

	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			{/* {DEMO_CARD_INFO.map((post, idx) => ( */}
			{posts.map(post => (
				<Card key={post._id}>
					{/* <Image
						// src={urlFor(post.titleImage).url()}
						// src={'/images/demo-img.jpg'}
						src={DemoImg}
						alt="image"
						width={500}
						height={500}
						className="rounded-t-lg h-[200px] object-cover"
					/> */}

					<CardContent className="mt-5">
						<h3 className="text-lg line-clamp-2 font-bold">
							{post.airlineName}
						</h3>

						{/* <div className="flex items-center justify-between py-2 mt-2">
							<Avatar className="w-7 h-7">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>

							<Button size="sm" variant="default">
								Follow
							</Button>
						</div> */}

						<div className="flex items-center justify-between">
							<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
								{post.from}
							</p>

							<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
								{post.to}
							</p>
						</div>

						<div className="flex items-center justify-between">
							<p>
								Ticket&apos;s:{' '}
								<span className="text-gray-500">{post.totalTicket}</span>
							</p>
							<p>
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
