import PageTitle from '@/app/dashboard/_components/page-title';
import Post from '@/app/dashboard/_components/post';
import { getAllPosts } from '@/lib/actions/post.action';
import { auth } from '@clerk/nextjs/server';

export interface POSTS {
	_id: string;
	from: string;
	to: string;
	arivalTime: string;
	departureTime: string;
	arivalDate: Date;
	departureDate: Date;
	totalTicket: number;
	airlineName: string;
	pricePerTicket: number;
	seatType: string;
}

export default async function MyPosts() {
	const { userId } = auth();

	const posts: POSTS[] = await getAllPosts(userId);

	return (
		<main className="flex flex-col gap-5 w-full">
			<PageTitle title="My Posts" />

			<Post posts={posts} />
		</main>
	);
}
