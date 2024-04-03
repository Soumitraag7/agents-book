import PageTitle from '@/app/dashboard/_components/page-title';
import Post from '@/app/dashboard/_components/post';

export default function MyPosts() {
	return (
		<main className="flex flex-col gap-5  w-full">
			<PageTitle title="My Posts" />

			<Post />
		</main>
	);
}
