'use client';

import PageTitle from '@/app/dashboard/_components/page-title';
import PostCard from '@/components/post-card';
import SearchForm from '@/components/search-form';

export default function Dashboard() {
	return (
		<main className="flex flex-col gap-5  w-full">
			<PageTitle title="Dashboard" />

			<SearchForm />

			<PostCard />
		</main>
	);
}
