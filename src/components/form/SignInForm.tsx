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

const FormSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(8, 'Password must have than 8 characters')
});

const SignInForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
			password: ''
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
				</div>
				<Button className="w-full mt-6" type="submit">
					Sign in
				</Button>
			</form>

			<p className=" text-sm text-[#a8a8a9] mt-2">
				No account?{' '}
				<Link className="text-blue-500 hover:underline" href="/sign-up">
					Sign up
				</Link>
			</p>
		</Form>
	);
};

export default SignInForm;
