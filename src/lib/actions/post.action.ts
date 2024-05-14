'use server';

import { revalidatePath } from 'next/cache';

import Post from '@/lib/database/models/post.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { handleError } from '@/lib//utils';
import User from '@/lib/database/models/user.model';

// ADD POST
export async function addPost(post: AddPost, userId: string | undefined) {
	try {
		await connectToDatabase();

		const user = await User.findOne({ clerkId: userId });

		const newPost = await Post.create({ ...post, createdBy: user._id });

		revalidatePath('/dashboard/my-posts');

		return JSON.parse(JSON.stringify(newPost));
	} catch (error) {
		handleError(error);
	}
}

// GET ALL POSTS
export async function getAllPosts() {
	try {
		await connectToDatabase();

		// const user = await User.findOne({ clerkId: userId });

		const posts = await Post.find({}).sort({
			createdAt: 'desc'
		});

		revalidatePath('/dashboard');

		return JSON.parse(JSON.stringify(posts));
		// return posts;
	} catch (error) {
		handleError(error);
	}
}

// GET USER ALL POSTS
export async function getUserAllPosts(userId: string | undefined | null) {
	try {
		await connectToDatabase();

		const user = await User.findOne({ clerkId: userId });

		const posts = await Post.find({ createdBy: user._id }).sort({
			createdAt: 'desc'
		});

		revalidatePath('/dashboard/my-posts');

		return JSON.parse(JSON.stringify(posts));
		// return posts;
	} catch (error) {
		handleError(error);
	}
}

// GET POST BY ID
export async function getPostById(postId: string) {
	try {
		await connectToDatabase();

		// Find post to delete
		const singlePost = await Post.findOne({ _id: postId });

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

		console.log('DELETE POST :: ', postId);

		// Find post to delete
		const postToDelete = await Post.findOne({ _id: postId });

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
