import DashboardHeader from '@/components/dashboard-header';
import DashboardSidebar from '@/components/dashboard-sidebar';

import SideNavbar from '@/components/side-navbar';

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{/* <div className="hidden lg:flex">
				<DashboardSidebar />
			</div>
			<main className="grid w-full h-full lg:pl-[300px]">
				<DashboardHeader />
				<div className="p-8">{children}</div>
			</main> */}

			<div className="min-h-screen w-full flex">
				<div className="">
					<SideNavbar />
				</div>
				<div className="p-8 w-full h-screen overflow-y-scroll">{children}</div>
			</div>
		</>
	);
}
