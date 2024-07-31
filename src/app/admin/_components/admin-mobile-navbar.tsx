'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	ShoppingCart,
	Users
} from 'lucide-react';
import Link from 'next/link';
import { adminNavItems } from './admin-sidebar';
import { usePathname } from 'next/navigation';

export default function AdminMobileNavbar() {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<nav className="grid gap-2 text-lg font-medium">
					<a href="/" className="flex items-center gap-2 text-lg font-semibold">
						<Package2 className="h-6 w-6" />
						<span className="sr-only">Agents Book</span>
					</a>
					{adminNavItems.map(item => (
						<Link
							key={item.label}
							href={item.href}
							className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
								pathname === item.href ? 'bg-muted text-primary' : ''
							}`}
						>
							<item.icon className="h-4 w-4" />
							{item.label}
						</Link>
					))}
				</nav>

				{/* <div className="mt-auto">
					<Card>
						<CardHeader>
							<CardTitle>Upgrade to Pro</CardTitle>
							<CardDescription>
								Unlock all features and get unlimited access to our support
								team.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button size="sm" className="w-full">
								Upgrade
							</Button>
						</CardContent>
					</Card>
				</div> */}
			</SheetContent>
		</Sheet>
	);
}
