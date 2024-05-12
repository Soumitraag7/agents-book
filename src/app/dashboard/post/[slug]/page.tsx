import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getPostById } from '@/lib/actions/post.action';
import { POSTS } from '@/app/dashboard/my-posts/page';
import { format } from 'date-fns';

export const revalidate = 30; // revalidate at most 30 seconds

export default async function SinglePost({
	params
}: {
	params: { slug: string };
}) {
	const post: POSTS = await getPostById(params.slug);

	return (
		<div className="mt-5 flex flex-col items-center justify-center">
			<h1>
				<span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
					Soumitra
				</span>
				<span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
					{post.airlineName}
				</span>
			</h1>

			<div className="flex gap-3">
				{/* <Image
					// src={urlFor(DEMO_PROD_INFO.titleImage).url()}
					src={'/images/demo-img.jpg'}
					width={500}
					height={500}
					alt="Title Image"
					priority
					className="rounded-lg mt-8 border"
				/> */}

				<div className="p-4 ">
					<div className="flex flex-col md:flex-row items-center justify-between mt-4 w-full px-2">
						<div className="flex items-center justify-center gap-2">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>AB</AvatarFallback>
							</Avatar>

							<Button>Follow</Button>
						</div>

						<div className="flex flex-col items-center justify-between mt-4  px-2">
							<p>
								Total Ticket:{' '}
								<span className="text-gray-500">{post.totalTicket}</span>
							</p>
							<p>
								Price:{' '}
								<span className="text-gray-500">Tk {post.pricePerTicket}</span>
							</p>
						</div>
					</div>

					<div className="text-justify mt-4 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
						<div className="flex flex-col md:flex-row items-center justify-between gap-7">
							<p>
								From: <span className="text-gray-500">{post.from}</span>
							</p>
							<p>
								To: <span className="text-gray-500">{post.to}</span>
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center justify-between gap-7">
							<p>
								Departure Date:{' '}
								<span className="text-gray-500">
									{format(post.departureDate, 'LLL dd, y')}
								</span>
							</p>
							<p>
								Departure Time:{' '}
								<span className="text-gray-500">{post.departureTime}</span>
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center justify-between gap-7">
							<p>
								Arival Date:{' '}
								<span className="text-gray-500">
									{format(post.arivalDate, 'LLL dd, y')}
								</span>
							</p>
							<p>
								Arival Time:{' '}
								<span className="text-gray-500">{post.arivalTime}</span>
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center justify-between gap-7">
							<p>
								Seat Type:{' '}
								<span className="text-gray-500 capitalize">
									{post.seatType}
								</span>
							</p>
						</div>

						<Button className="w-full mt-7">Contact seller</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
