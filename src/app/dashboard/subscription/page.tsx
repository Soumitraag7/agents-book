import React from 'react';
import PageTitle from '@/app/dashboard/_components/page-title';
import Pricing from '@/app/(root)/_components/pricing';

export default function SubscriptionPage() {
	return (
		<main className="flex flex-col gap-5  w-full">
			<PageTitle title="My Subscription" />

			<Pricing />
		</main>
	);
}
