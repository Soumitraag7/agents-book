'use server';

import { revalidatePath } from 'next/cache';

import Post from '@/lib/database/models/post.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { handleError } from '@/lib//utils';

// ADD POST
export async function addPost(post: AddPost) {
	try {
		await connectToDatabase();

		const newPost = await Post.create(post);

		return JSON.parse(JSON.stringify(newPost));
	} catch (error) {
		handleError(error);
	}
}

// GET ALL POSTS
export async function getAllPosts() {
	try {
		await connectToDatabase();
	} catch (error) {
		handleError(error);
	}
}

// GET POST BY ID
export async function getPostById(postId: string) {
	try {
		await connectToDatabase();

		// Find post to delete
		const singlePost = await Post.findOne({ postId });

		if (!singlePost) {
			throw new Error('Post not found');
		}

		return singlePost ? JSON.parse(JSON.stringify(singlePost)) : null;
	} catch (error) {
		handleError(error);
	}
}

// UPDATE POST
export async function updatePost() {
	try {
		await connectToDatabase();

		const updatePost = await Post.findOneAndUpdate({});

		revalidatePath('/dashboard/my-posts');
	} catch (error) {
		handleError(error);
	}
}

// DELETE POST
export async function deletePost(postId: string) {
	try {
		await connectToDatabase();

		// Find post to delete
		const postToDelete = await Post.findOne({ postId });

		if (!postToDelete) {
			throw new Error('Post not found');
		}

		// Delete post
		const deletedPost = await Post.findByIdAndDelete(postToDelete._id);
		revalidatePath('/dashboard/my-posts');

		return deletedPost ? JSON.parse(JSON.stringify(deletedPost)) : null;
	} catch (error) {
		handleError(error);
	}
}
