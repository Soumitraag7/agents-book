import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export const plans = [
	{
		_id: 1,
		name: 'Free',
		icon: '/assets/icons/free-plan.svg',
		price: 0,
		credits: 20,
		inclusions: [
			{
				label: '20 Free Credits',
				isIncluded: true
			},
			{
				label: 'Basic Access to Services',
				isIncluded: true
			},
			{
				label: 'Priority Customer Support',
				isIncluded: false
			},
			{
				label: 'Priority Updates',
				isIncluded: false
			}
		]
	},
	{
		_id: 2,
		name: 'Pro Package',
		icon: '/assets/icons/free-plan.svg',
		price: 40,
		credits: 120,
		inclusions: [
			{
				label: '120 Credits',
				isIncluded: true
			},
			{
				label: 'Full Access to Services',
				isIncluded: true
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true
			},
			{
				label: 'Priority Updates',
				isIncluded: false
			}
		]
	},
	{
		_id: 3,
		name: 'Premium Package',
		icon: '/assets/icons/free-plan.svg',
		price: 199,
		credits: 2000,
		inclusions: [
			{
				label: '2000 Credits',
				isIncluded: true
			},
			{
				label: 'Full Access to Services',
				isIncluded: true
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true
			},
			{
				label: 'Priority Updates',
				isIncluded: true
			}
		]
	}
];

export default function Pricing() {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-col">
			<h2 className="bold-40 text-dark-600 flexCenter">Pricing</h2>

			<ul className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3">
				{plans.map(plan => (
					<li
						key={plan.name}
						className="w-full rounded-[16px] border-2 border-purple-200/20 bg-blue-300  p-8 shadow-xl shadow-purple-200/20 lg:max-w-none"
					>
						<div className="flex-center flex-col gap-3">
							<Image src={plan.icon} alt="check" width={50} height={50} />
							<p className="p-20-semibold mt-2 text-purple-500">{plan.name}</p>
							<p className="h1-semibold text-dark-600 text-black">
								${plan.price}
							</p>
							<p className="p-16-regular text-black">{plan.credits} Credits</p>
						</div>

						{/* Inclusions */}
						<ul className="flex flex-col gap-5 py-9">
							{plan.inclusions.map(inclusion => (
								<li
									key={plan.name + inclusion.label}
									className="flex items-center gap-4 text-black"
								>
									<Image
										src={`/assets/icons/${
											inclusion.isIncluded ? 'check.svg' : 'cross.svg'
										}`}
										alt="check"
										width={24}
										height={24}
									/>
									<p className="p-16-regular">{inclusion.label}</p>
								</li>
							))}
						</ul>

						{plan.name === 'Free' ? (
							<Button variant="outline" className="credits-btn">
								Free Consumable
							</Button>
						) : (
							<Button variant="outline" className="credits-btn">
								Free Consumable
							</Button>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}
