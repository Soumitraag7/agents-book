import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const revalidate = 30; // revalidate at most 30 seconds

const DEMO_PROD_INFO = {
	title: 'TEST-TITLE',
	content:
		'SMALL- DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur sit corrupti voluptate. In harum velit odit, voluptatum nobis minus ratione laudantium deserunt, nam provident ducimus, optio aspernatur doloribus voluptates similique quam repellat inventore reprehenderit hic! Saepe vero hic voluptatibus.',
	price: '20'
};

export default async function SinglePost({
	params
}: {
	params: { slug: string };
}) {
	return (
		<div className="mt-5 flex flex-col items-center justify-center">
			<h1>
				<span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
					Soumitra
				</span>
				<span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
					{DEMO_PROD_INFO.title}
				</span>
			</h1>

			<div className="flex gap-3">
				<Image
					// src={urlFor(DEMO_PROD_INFO.titleImage).url()}
					src={'/images/demo-img.jpg'}
					width={500}
					height={500}
					alt="Title Image"
					priority
					className="rounded-lg mt-8 border"
				/>

				<div className="p-4 ">
					<div className="flex  items-center justify-between mt-4 w-full px-2">
						<div className="flex items-center justify-center gap-2">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>

							<Button>Follow</Button>
						</div>
						<div className="flex flex-col items-center justify-between mt-4  px-2">
							<p>
								Posted: <span className="text-gray-500">3hr</span>
							</p>
							<p>
								Price:{' '}
								<span className="text-gray-500">${DEMO_PROD_INFO.price}</span>
							</p>
						</div>
					</div>

					<div className="text-justify mt-4 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
						{DEMO_PROD_INFO.content}

						<Button className="w-full mt-7">Contact seller</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
