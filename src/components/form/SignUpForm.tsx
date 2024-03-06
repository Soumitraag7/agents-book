'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import GoogleSignInButton from '../google-sign-in-button';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const FormSchema = z
	.object({
		firstName: z.string().min(1, 'First name is required').max(100),
		lastName: z.string().min(1, 'Last name is required').max(100),
		email: z.string().min(1, 'Email is required').email('Invalid email'),
		password: z
			.string()
			.min(1, 'Password is required')
			.min(8, 'Password must have than 8 characters'),
		confirmPassword: z.string().min(1, 'Password confirmation is required')
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Password do not match'
	});

const SignUpForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	});

	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		console.log(values);
		form.reset();
	};

	return (
		<Form {...form}>
			<GoogleSignInButton>
				<Image
					src="/images/google-logo.png"
					alt="Google Logo"
					height={20}
					width={20}
				/>
				<span className="ml-5">Continue with Google</span>
			</GoogleSignInButton>
			<div className="mx-auto my-5 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
				or
			</div>

			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-2">
					<div className="flex md:flex-row flex-col gap-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage className="text-[#f04438]" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage className="text-[#f04438]" />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage className="text-[#f04438]" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									{/* <Input type="password" {...field} /> */}

									<div className="relative">
										<Input
											type={showPassword ? 'text' : 'password'}
											{...field}
										/>

										<Button
											type="button"
											variant="ghost"
											size="sm"
											className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
											onClick={() => setShowPassword(prev => !prev)}
											// disabled={disabled}
										>
											{/* && !disabled */}
											{showPassword ? (
												<EyeIcon className="h-4 w-4" aria-hidden="true" />
											) : (
												<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
											)}
											<span className="sr-only">
												{showPassword ? 'Hide password' : 'Show password'}
											</span>
										</Button>
									</div>
								</FormControl>
								<FormMessage className="text-[#f04438]" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Re-Enter your password</FormLabel>
								<FormControl>
									{/* <Input type="password" {...field} /> */}

									<div className="relative">
										<Input
											type={showPassword ? 'text' : 'password'}
											{...field}
										/>

										<Button
											type="button"
											variant="ghost"
											size="sm"
											className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
											onClick={() => setShowPassword(prev => !prev)}
											// disabled={disabled}
										>
											{/* && !disabled */}
											{showPassword ? (
												<EyeIcon className="h-4 w-4" aria-hidden="true" />
											) : (
												<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
											)}
											<span className="sr-only">
												{showPassword ? 'Hide password' : 'Show password'}
											</span>
										</Button>
									</div>
								</FormControl>
								<FormMessage className="text-[#f04438]" />
							</FormItem>
						)}
					/>
				</div>
				<Button className="w-full mt-6" type="submit">
					Sign up
				</Button>
			</form>

			<p className=" text-sm text-[#a8a8a9] mt-2">
				Have an account?{' '}
				<Link className="text-blue-500 hover:underline" href="/sign-in">
					Sign in
				</Link>
			</p>
		</Form>
	);
};

export default SignUpForm;
