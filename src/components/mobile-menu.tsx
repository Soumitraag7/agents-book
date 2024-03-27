'use client';

import Link from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignedIn } from '@clerk/nextjs';

function MobileMenu() {
	return (
		<div className=" lg:hidden">
			<Sheet>
				<SheetTrigger className="flex items-center justify-center">
					<Menu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
						{/* <SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription> */}
					</SheetHeader>

					<div className="grid gap-4 py-4">
						<Link href="/">Home</Link>
						<SignedIn>
							<Link href="/dashboard">Dashboard</Link>
							<Link href="/">Profile</Link>
						</SignedIn>
						<Link href="/sign-in" className="whitespace-nowrap ">
							Sign in
						</Link>
						<Link href="/sign-up" className="whitespace-nowrap ">
							Sign up
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}

export default MobileMenu;
