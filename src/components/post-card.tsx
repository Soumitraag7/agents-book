import Image from 'next/image';
import Link from 'next/link';
import { DEMO_CARD_INFO } from '@/constants';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function PostCard() {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			{DEMO_CARD_INFO.map((post, idx) => (
				<Card key={idx}>
					<Image
						// src={urlFor(post.titleImage).url()}
						src={'/images/demo-img.jpg'}
						alt="image"
						width={500}
						height={500}
						className="rounded-t-lg h-[200px] object-cover"
					/>

					<CardContent className="mt-5">
						<h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>

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
							<p>
								Posted: <span className="text-gray-500">3hr ago</span>
							</p>
							<p>
								Price: <span className="text-gray-500">${post.price}</span>
							</p>
						</div>

						<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
							{post.smallDescription}
						</p>

						<Button asChild className="w-full mt-7">
							<Link href={`/dashboard/post/${post.currentSlug}`}>
								Read More
							</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
