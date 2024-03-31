import React from 'react';
import PageTitle from '@/app/dashboard/_components/page-title';
import AddPostForm from '@/app/dashboard/_components/add-post-form';

export default function AddPost() {
	return (
		<main className="flex flex-col gap-5  w-full">
			<PageTitle title="Add Post" />

			<AddPostForm />
		</main>
	);
}
