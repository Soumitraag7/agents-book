// 'use client';

import PageTitle from '@/app/dashboard/_components/page-title';
import PostCard from '@/components/post-card';
import SearchForm from '@/components/search-form';
import { getAllPosts } from '@/lib/actions/post.action';
import { POSTS } from '@/app/dashboard/my-posts/page';

export const revalidate = 30; // revalidate at most 30 seconds

export default async function Dashboard() {
	const posts: POSTS[] = await getAllPosts();

	return (
		<main className="flex flex-col gap-5  w-full">
			<PageTitle title="Dashboard" />

			<SearchForm />

			<PostCard posts={posts} />
		</main>
	);
}
