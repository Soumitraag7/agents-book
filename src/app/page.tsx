import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const data = [
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG'
	}
];

export default function Home() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
			{data.map((post, idx) => (
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
						<div className="flex items-center justify-between">
							<p>
								Posted: <span className="text-gray-500">3hr</span>
							</p>
							<p>
								Price: <span className="text-gray-500">${post.price}</span>
							</p>
						</div>
						<p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
							{post.smallDescription}
						</p>
						<Button asChild className="w-full mt-7">
							<Link href={`/product/${post.currentSlug}`}>Read More</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
