import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
			<div className="flexCenter flex-col flex-1 xl:w-1/2">
				<h1 className="bold-52 lg:bold-64">Your go-to booking platform</h1>
				<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
					We want to be on each of your journeys seeking the satisfaction of
					seeing the incorruptible beauty of nature. We can help you on an
					adventure around the world in just one app.
				</p>

				<div className="flex flex-col w-full gap-3 sm:flex-row my-11">
					<Button className="px-8 py-5 rounded-full bold-16 whitespace-nowrap">
						<Link href="/sign-up">Get Started</Link>
					</Button>
				</div>
			</div>

			<div className="flex-1 flexCenter bg-blue-500 rounded-2xl ">
				<h2>CUSTOM VIDEO</h2>
			</div>
		</section>
	);
}
