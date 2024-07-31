'use client';

import * as z from 'zod';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
	toggleSubscription: z.boolean()
});

export default function UserStatusBtn(isSubscribed: any) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			toggleSubscription: isSubscribed.isSubscribed
		}
	});

	const { register, watch, setValue } = form;

	const toggleSubscription = watch('toggleSubscription');

	const handleSubscriptionChange = async () => {};

	return (
		<Switch {...register('toggleSubscription')} checked={toggleSubscription} />
	);
}
