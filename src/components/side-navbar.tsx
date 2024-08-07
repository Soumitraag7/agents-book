/** @format */
'use client';

import { useEffect, useState } from 'react';
import { Nav } from '@/components/ui/nav';

type Props = {};

import {
	ShoppingCart,
	LayoutDashboard,
	UsersRound,
	Settings,
	ChevronRight,
	LogOut,
	Sparkle,
	FilePlus2,
	Files
} from 'lucide-react';
import { Button } from './ui/button';

import { useWindowWidth } from '@react-hook/window-size';
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SideNavbar({}: Props) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const onlyWidth = useWindowWidth();
	const mobileWidth = onlyWidth < 768;

	const router = useRouter();

	function toggleSidebar() {
		setIsCollapsed(!isCollapsed);
	}

	const { user } = useUser();

	return (
		<>
			{isClient ? (
				<aside className="relative min-w-[80px] border-r px-3 pb-10 pt-24 flex flex-col items-center justify-between h-screen ">
					{!mobileWidth && (
						<div className="absolute right-[-20px] top-7">
							<Button
								onClick={toggleSidebar}
								variant="secondary"
								className=" rounded-full p-2"
							>
								<ChevronRight />
							</Button>
						</div>
					)}

					<Nav
						isCollapsed={mobileWidth ? true : isCollapsed}
						links={[
							{
								title: 'Dashboard',
								href: '/dashboard',
								icon: LayoutDashboard,
								variant: 'ghost'
							},
							{
								title: 'Add Post',
								href: '/dashboard/add-post',
								icon: FilePlus2,
								variant: 'ghost'
							},
							{
								title: 'My Posts',
								href: '/dashboard/my-posts',
								icon: Files,
								variant: 'ghost'
							},
							{
								title: 'Subscription',
								href: '/dashboard/subscription',
								icon: Sparkle,
								variant: 'ghost'
							},
							{
								title: 'Settings',
								href: '/dashboard/settings',
								icon: Settings,
								variant: 'ghost'
							}
						]}
					/>

					{isCollapsed ? (
						<div data-collapsed={isCollapsed}>
							<div className="flex items-center justify-center">
								<UserButton />
							</div>

							{/* <SignOutButton signOutCallback={() => router.push('/')}>
								<Button
									variant="ghost"
									className="flex items-center justify-center gap-1.5 "
								>
									<LogOut size={15} />
								</Button>
							</SignOutButton> */}
						</div>
					) : (
						<div data-collapsed={isCollapsed}>
							<div className="flex items-center justify-center gap-2">
								<UserButton />
								{!mobileWidth && (
									<span className="text-sm">{user?.username}</span>
								)}
							</div>

							{/* <SignOutButton signOutCallback={() => router.push('/')}>
								<Button
									variant="ghost"
									className="flex items-center justify-center gap-1.5 "
								>
									<LogOut size={15} />
									{!mobileWidth && <span className="text-sm">Sign out</span>}
								</Button>
							</SignOutButton> */}
						</div>
					)}
				</aside>
			) : (
				<p className="p-12">Loading...</p>
			)}
		</>
	);
}
