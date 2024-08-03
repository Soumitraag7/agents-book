'use client';

import * as z from 'zod';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateUserSub } from '@/lib/actions/admin.action';

const FormSchema = z.object({
	toggleSubscription: z.boolean()
});

export default function UserStatusBtn({
	isSubscribed,
	userId
}: {
	isSubscribed: boolean;
	userId: string;
}) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			toggleSubscription: isSubscribed
		}
	});

	const { register, watch, setValue } = form;

	const toggleSubscription = watch('toggleSubscription');

	const handleSubscriptionChange = async () => {
		setValue('toggleSubscription', !toggleSubscription);
		updateUserSub(userId, !toggleSubscription);
	};

	return (
		<Switch
			{...register('toggleSubscription')}
			checked={toggleSubscription}
			onCheckedChange={handleSubscriptionChange}
		/>
	);
}
