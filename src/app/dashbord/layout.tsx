import DashbordHeader from '@/components/dashbord-header';
import DashbordSidebar from '@/components/dashbord-sidebar';
import React from 'react';

export default function DashbordLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="hidden lg:flex">
				<DashbordSidebar />
			</div>
			<main className="grid w-full h-full lg:pl-[300px]">
				<DashbordHeader />
				<div className="p-8">{children}</div>
			</main>
		</>
	);
}
