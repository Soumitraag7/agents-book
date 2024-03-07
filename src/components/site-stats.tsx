import React from 'react';

export default function SiteStats() {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
			<div className="w-full bg-blue-500  flexCenter flex-wrap lg:flex-row gap-10 rounded-2xl py-9 ">
				<div>
					<h2 className="bold-40 lg:bold-40">200+</h2>
					<p className="text-slate-700">Active Customer</p>
				</div>
				<div>
					<h2 className="bold-40 lg:bold-40">200+</h2>
					<p className="text-slate-700">Active Customer</p>
				</div>
				<div>
					<h2 className="bold-40 lg:bold-40">200+</h2>
					<p className="text-slate-700">Active Customer</p>
				</div>
				<div>
					<h2 className="bold-40 lg:bold-40">200+</h2>
					<p className="text-slate-700">Active Customer</p>
				</div>
			</div>
		</section>
	);
}
