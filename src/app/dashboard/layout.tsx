import DashboardHeader from '@/components/dashboard-header';
import DashboardSidebar from '@/components/dashboard-sidebar';
import React from 'react';

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="hidden lg:flex">
				<DashboardSidebar />
			</div>
			<main className="grid w-full h-full lg:pl-[300px]">
				<DashboardHeader />
				<div className="p-8">{children}</div>
			</main>
		</>
	);
}
