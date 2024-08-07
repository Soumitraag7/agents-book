import type { Metadata } from 'next';
import { isAdmin } from '@/lib/actions/admin.action';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/app/admin/_components/admin-sidebar';
import AdminHeader from '@/app/admin/_components/admin-header';

export const metadata: Metadata = {
	title: 'Agents Book | Admin',
	description: 'Generated by create next app'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId } = auth();

	const checkIsAdmin = await isAdmin(userId);

	if (!checkIsAdmin) {
		redirect('/');
	}

	return (
		<html lang="en">
			<body>
				<main className="overflow-hidden">
					<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
						{/* Sidebar */}
						<AdminSidebar />

						<div className="flex flex-col">
							{/* Admin Header */}
							<AdminHeader />
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
