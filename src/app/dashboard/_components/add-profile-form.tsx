'use client';

import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useFormStatus } from 'react-dom';
import { useUser } from '@clerk/nextjs';
import { createOrUpdateProfile } from '@/lib/actions/user.actions';

const FormSchema = z.object({
	agencyName: z.string().min(1, 'Please enter your agency name').max(100),
	address: z.string().min(1, 'Please enter your address').max(100),
	phoneNumber: z
		.string()
		.regex(/^(?:\+8801|01)[3-9]\d{8}$/, 'Please enter a valid phone number')
});

export default function AddProfileForm({
	profile
}: {
	profile: ProfileParams;
}) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			agencyName: profile?.agencyName || '',
			address: profile?.address || '',
			phoneNumber: profile?.phoneNumber || ''
		}
	});

	const { pending } = useFormStatus();

	const { user } = useUser();

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		createOrUpdateProfile(user?.id, values);
		console.log('pending :: ', pending);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-2 w-full">
					<div className=" flex lg:flex-row flex-col gap-4">
						{/* Agency Name */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="agencyName"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											Agency Name
										</FormLabel>
										<FormControl>
											<Input placeholder="Agents Book" {...field} />
										</FormControl>
										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>

						{/* Address */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">Address </FormLabel>
										<FormControl>
											<Input
												placeholder="House: 1/4, Dhaka 1205, Bangladesh"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>

						{/* Phone Number */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="phoneNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											Phone Number{' '}
										</FormLabel>
										<FormControl>
											<Input placeholder="+8801XXXXXXXXX" {...field} />
										</FormControl>
										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex item-center justify-center">
					<Button
						className="w-full lg:w-1/4 mt-6"
						type="submit"
						aria-disabled={pending}
					>
						{pending ? 'Saving profile' : 'Save Profile'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
